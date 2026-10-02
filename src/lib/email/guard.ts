import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { isHoneypotTripped } from "@/lib/email/honeypot";

const WINDOW_MS =
  Number(process.env.FORM_RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000;
const MAX_REQUESTS = Number(process.env.FORM_RATE_LIMIT_MAX) || 5;

interface RateLimitCache {
  hits: Map<string, number[]>;
}

declare global {
  var formRateLimitCache: RateLimitCache | undefined;
}

const cache: RateLimitCache = global.formRateLimitCache ?? { hits: new Map() };

if (!global.formRateLimitCache) {
  global.formRateLimitCache = cache;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function checkRateLimit(
  identifier: string,
  scope: string,
): RateLimitResult {
  const now = Date.now();
  const key = `${scope}:${identifier}`;
  const recent = (cache.hits.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recent.length >= MAX_REQUESTS) {
    const oldest = recent[0] as number;
    cache.hits.set(key, recent);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((WINDOW_MS - (now - oldest)) / 1000),
      ),
    };
  }

  recent.push(now);
  cache.hits.set(key, recent);

  if (cache.hits.size > 5000) {
    for (const [existingKey, timestamps] of cache.hits) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) {
        cache.hits.delete(existingKey);
      }
    }
  }

  return {
    allowed: true,
    remaining: MAX_REQUESTS - recent.length,
    retryAfterSeconds: 0,
  };
}

export type GuardOutcome =
  | { action: "proceed" }
  | { action: "discard" }
  | { action: "reject"; response: Response };

export function guardSubmission(
  request: NextRequest,
  body: Record<string, unknown>,
  scope: string,
): GuardOutcome {
  if (isHoneypotTripped(body)) {
    console.warn(`[guard] honeypot tripped for ${scope}`);
    return { action: "discard" };
  }

  const identifier = getClientIdentifier(request);
  const limit = checkRateLimit(identifier, scope);

  if (!limit.allowed) {
    console.warn(
      `[guard] rate limit hit for ${scope} identifier=${identifier} retryAfter=${limit.retryAfterSeconds}s`,
    );
    return {
      action: "reject",
      response: errorResponse(
        "RATE_LIMITED",
        "Too many submissions from this connection. Please try again later.",
        429,
      ),
    };
  }

  return { action: "proceed" };
}

export function discardResponse(message: string): Response {
  return successResponse({ message });
}
