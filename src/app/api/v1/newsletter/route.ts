import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { connectDB } from "@/lib/db";
import { Subscriber } from "@/lib/models/subscriber";
import { sendMail } from "@/lib/nodemailer";
import { NewsletterSchema } from "@/lib/validations/newsletter";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    await connectDB();

    const existing = await Subscriber.findOne({ email });

    if (existing) {
      if (existing.status === "active") {
        return successResponse({
          message: "You are already subscribed.",
        });
      }
      existing.status = "active";
      await existing.save();
    } else {
      await Subscriber.create({ email });
    }

    await sendMail({
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
      replyTo: email,
    });

    return successResponse({
      message: "You have been subscribed successfully.",
    });
  } catch {
    return errorResponse(
      "SERVER_ERROR",
      "An unexpected error occurred. Please try again later.",
      500,
    );
  }
}
