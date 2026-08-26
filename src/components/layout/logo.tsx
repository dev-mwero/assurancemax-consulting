import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2 group" aria-label={siteConfig.name}>
			<Image
				src="/logo-navbar.png"
				alt={`${siteConfig.name} logo`}
				width={200}
				height={155}
				priority
				className="h-10 w-auto"
			/>
		</Link>
	);
}
