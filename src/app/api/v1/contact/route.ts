import { type NextRequest } from "next/server";
import { ContactSchema } from "@/lib/validations/contact";
import { successResponse, errorResponse } from "@/lib/api/responses";

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

		// TODO: Send email, store in database, or forward to CRM
		// For now, return success
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
