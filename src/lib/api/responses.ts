import type { ApiResponse } from "@/types/api";

export function successResponse<T>(data: T, status = 200): Response {
	return Response.json(
		{ success: true, data } satisfies ApiResponse<T>,
		{ status },
	);
}

export function errorResponse(
	code: string,
	message: string,
	status = 400,
	details?: Record<string, unknown>,
): Response {
	return Response.json(
		{
			success: false,
			error: { code, message, details },
		} satisfies ApiResponse<never>,
		{ status },
	);
}
