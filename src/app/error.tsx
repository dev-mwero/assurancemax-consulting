"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error("Page error:", error);
	}, [error]);

	return (
		<div className="flex min-h-[60vh] items-center justify-center">
			<div className="mx-auto max-w-md px-4 text-center">
				<h1 className="text-2xl font-bold text-foreground">
					Something went wrong
				</h1>
				<p className="mt-3 text-muted-foreground leading-relaxed">
					An unexpected error occurred while loading this page.
				</p>
				<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Button onClick={() => reset()}>Try Again</Button>
					<Button render={<Link href="/" />} variant="outline">
						Go Home
					</Button>
				</div>
			</div>
		</div>
	);
}
