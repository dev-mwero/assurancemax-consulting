import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { connectDB } from "@/lib/db";
import { discardResponse, guardSubmission } from "@/lib/email/guard";
import {
  contactSubmissionEmail,
  submissionAcknowledgementEmail,
} from "@/lib/email/templates";
import { Contact } from "@/lib/models/contact";
import { trySendMail } from "@/lib/nodemailer";
import { ContactSchema } from "@/lib/validations/contact";

const SUCCESS_MESSAGE =
  "Your message has been received. We will respond promptly.";

export async function POST(request: NextRequest) {
  const scope = "contact";
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

  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return errorResponse(
      "VALIDATION_ERROR",
      "Please check your form inputs and try again.",
      400,
      result.error.flatten().fieldErrors as Record<string, unknown>,
    );
  }

  const { name, email, phone, organization, service, message } = result.data;

  try {
    await connectDB();
    await Contact.create({
      name,
      email,
      phone: phone || undefined,
      organization: organization || undefined,
      service: service || undefined,
      message,
    });
  } catch (error) {
    console.error(`[contact] failed to store submission from ${email}:`, error);
    return errorResponse(
      "SERVER_ERROR",
      "We could not record your message. Please try again shortly.",
      500,
    );
  }

  const notification = contactSubmissionEmail({
    name,
    email,
    phone: phone || undefined,
    organization: organization || undefined,
    service: service || undefined,
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
      kind: "message",
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
