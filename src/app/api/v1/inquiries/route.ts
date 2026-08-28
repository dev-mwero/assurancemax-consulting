import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { connectDB } from "@/lib/db";
import { Inquiry } from "@/lib/models/inquiry";
import { sendMail } from "@/lib/nodemailer";
import { InquirySchema } from "@/lib/validations/inquiries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    await connectDB();
    await Inquiry.create({
      name,
      email,
      organization: organization || undefined,
      serviceInterest,
      preferredContact,
      message,
    });

    const html = `
      <h2>New Inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        ${organization ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Organization</td><td style="padding:8px;border:1px solid #ddd">${organization}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Service Interest</td><td style="padding:8px;border:1px solid #ddd">${serviceInterest}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Preferred Contact</td><td style="padding:8px;border:1px solid #ddd">${preferredContact}</td></tr>
      </table>
      <h3>Message</h3>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await sendMail({
      subject: `Inquiry: ${name} - ${serviceInterest}`,
      html,
      replyTo: email,
    });

    return successResponse({
      message: "Your inquiry has been received. We will be in touch shortly.",
    });
  } catch {
    return errorResponse(
      "SERVER_ERROR",
      "An unexpected error occurred. Please try again later.",
      500,
    );
  }
}
