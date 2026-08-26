import type { NextRequest } from "next/server";
import { errorResponse, successResponse } from "@/lib/api/responses";
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

    // TODO: Process inquiry — store, notify team, etc.
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
