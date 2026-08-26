"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error("Global error:", error);
	}, [error]);

	return (
		<html lang="en">
			<body className="min-h-screen flex items-center justify-center bg-background">
				<div className="mx-auto max-w-md px-4 text-center">
					<h1 className="text-2xl font-bold text-foreground">
						Something went wrong
					</h1>
					<p className="mt-3 text-muted-foreground leading-relaxed">
						An unexpected error occurred. Please try again or contact us if
						the problem persists.
					</p>
					<Button onClick={() => reset()} className="mt-6">
						Try Again
					</Button>
				</div>
			</body>
		</html>
	);
}
