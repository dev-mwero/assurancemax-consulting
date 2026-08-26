import { type NextRequest } from "next/server";
import { NewsletterSchema } from "@/lib/validations/newsletter";
import { successResponse, errorResponse } from "@/lib/api/responses";

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

		// TODO: Subscribe to newsletter service (Mailchimp, SendGrid, etc.)
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
