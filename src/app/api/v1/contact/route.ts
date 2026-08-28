import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
import { sendMail } from "@/lib/nodemailer";
import { ContactSchema } from "@/lib/validations/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        ${phone ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>` : ""}
        ${organization ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Organization</td><td style="padding:8px;border:1px solid #ddd">${organization}</td></tr>` : ""}
        ${service ? `<tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Service</td><td style="padding:8px;border:1px solid #ddd">${service}</td></tr>` : ""}
      </table>
      <h3>Message</h3>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await sendMail({
      subject: `Contact Form: ${name}`,
      html,
      replyTo: email,
    });

    return successResponse({
      message: "Your message has been received. We will respond promptly.",
    });
  } catch {
    return errorResponse(
      "SERVER_ERROR",
      "An unexpected error occurred. Please try again later.",
      500,
    );
  }
}
