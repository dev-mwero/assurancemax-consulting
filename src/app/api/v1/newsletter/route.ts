import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { connectDB } from "@/lib/db";
import { discardResponse, guardSubmission } from "@/lib/email/guard";
import { newsletterSignupEmail } from "@/lib/email/templates";
import { Subscriber } from "@/lib/models/subscriber";
import { trySendMail } from "@/lib/nodemailer";
import { NewsletterSchema } from "@/lib/validations/newsletter";

const SUCCESS_MESSAGE = "You have been subscribed successfully.";
const ALREADY_SUBSCRIBED = "You are already subscribed.";

export async function POST(request: NextRequest) {
  const scope = "newsletter";
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return errorResponse(
      "INVALID_BODY",
      "The request body must be valid JSON.",
      400,
    );
  }

  const guard = guardSubmission(request, body, scope);
  if (guard.action === "discard") return discardResponse(SUCCESS_MESSAGE);
  if (guard.action === "reject") return guard.response;

  const result = NewsletterSchema.safeParse(body);

  if (!result.success) {
    return errorResponse(
      "VALIDATION_ERROR",
      "Please enter a valid email address.",
      400,
      result.error.flatten().fieldErrors as Record<string, unknown>,
    );
  }

  const { email } = result.data;

  try {
    await connectDB();

    const existing = await Subscriber.findOne({ email });

    if (existing) {
      if (existing.status === "active") {
        return successResponse({ message: ALREADY_SUBSCRIBED });
      }
      existing.status = "active";
      await existing.save();
    } else {
      await Subscriber.create({ email });
    }
  } catch (error) {
    console.error(
      `[newsletter] failed to store subscription for ${email}:`,
      error,
    );
    return errorResponse(
      "SERVER_ERROR",
      "We could not record your subscription. Please try again shortly.",
      500,
    );
  }

  const notification = newsletterSignupEmail({ email });

  await trySendMail(
    {
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      replyTo: email,
    },
    { source: scope, identifier: email },
  );

  return successResponse({ message: SUCCESS_MESSAGE });
}
