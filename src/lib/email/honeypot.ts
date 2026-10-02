import { z } from "zod";

export const HONEYPOT_FIELD = "company_website";

export const HoneypotSchema = z.object({
  [HONEYPOT_FIELD]: z.string().max(500).optional(),
});

export function isHoneypotTripped(body: Record<string, unknown>): boolean {
  const value = body[HONEYPOT_FIELD];
  return typeof value === "string" && value.trim().length > 0;
}
