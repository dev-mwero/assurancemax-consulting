import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex field-sizing-content min-h-16 w-full rounded-xl border border-input bg-white/80 px-4 py-3 text-base shadow-inner shadow-black/5 transition-all duration-200 outline-none placeholder:text-muted-foreground focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:shadow-md disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-sm",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
