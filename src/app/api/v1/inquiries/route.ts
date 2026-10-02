import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { connectDB } from "@/lib/db";
import { discardResponse, guardSubmission } from "@/lib/email/guard";
import {
  inquirySubmissionEmail,
  submissionAcknowledgementEmail,
} from "@/lib/email/templates";
import { Inquiry } from "@/lib/models/inquiry";
import { trySendMail } from "@/lib/nodemailer";
import { InquirySchema } from "@/lib/validations/inquiries";

const SUCCESS_MESSAGE =
  "Your inquiry has been received. We will be in touch shortly.";

export async function POST(request: NextRequest) {
  const scope = "inquiries";
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

  const result = InquirySchema.safeParse(body);

  if (!result.success) {
    return errorResponse(
      "VALIDATION_ERROR",
      "Please check your form inputs and try again.",
      400,
      result.error.flatten().fieldErrors as Record<string, unknown>,
    );
  }

  const {
    name,
    email,
    organization,
    serviceInterest,
    preferredContact,
    message,
  } = result.data;

  try {
    await connectDB();
    await Inquiry.create({
      name,
      email,
      organization: organization || undefined,
      serviceInterest,
      preferredContact,
      message,
    });
  } catch (error) {
    console.error(
      `[inquiries] failed to store submission from ${email}:`,
      error,
    );
    return errorResponse(
      "SERVER_ERROR",
      "We could not record your request. Please try again shortly.",
      500,
    );
  }

  const notification = inquirySubmissionEmail({
    name,
    email,
    organization: organization || undefined,
    serviceInterest,
    preferredContact,
    message,
  });

  const delivered = await trySendMail(
    {
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      replyTo: email,
    },
    { source: scope, identifier: email },
  );

  if (delivered && process.env.SEND_ACKNOWLEDGEMENT === "true") {
    const acknowledgement = submissionAcknowledgementEmail({
      name,
      kind: "quote request",
    });
    await trySendMail(
      {
        to: email,
        subject: acknowledgement.subject,
        html: acknowledgement.html,
        text: acknowledgement.text,
        replyTo: process.env.SMTP_FROM,
      },
      { source: `${scope}-acknowledgement`, identifier: email },
    );
  }

  return successResponse({ message: SUCCESS_MESSAGE });
}
