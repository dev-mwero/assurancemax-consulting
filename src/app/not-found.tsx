import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center">
			<div className="mx-auto max-w-md px-4 text-center">
				<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
					404
				</p>
				<h1 className="mt-3 text-2xl font-bold text-foreground">
					Page not found
				</h1>
				<p className="mt-3 text-muted-foreground leading-relaxed">
					Sorry, we could not find the page you are looking for. It may have
					been moved or does not exist.
				</p>
				<Button render={<Link href="/" />} className="mt-6">
					Go to Homepage
				</Button>
			</div>
		</div>
	);
}
