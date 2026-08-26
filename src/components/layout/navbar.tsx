"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { navLinks, serviceSlugs } from "@/lib/constants";
import { cn } from "@/lib/utils";

const serviceLinks = serviceSlugs.map((slug) => ({
	label: slug
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" "),
	href: `/services/${slug}`,
}));

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-200",
				scrolled
					? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
					: "bg-background",
			)}
		>
			<nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Logo />

				<div className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => {
						const isActive = pathname === link.href;
						if (link.label === "Services") {
							return (
								<div key={link.href} className="relative group">
									<button
										type="button"
										className={cn(
											"inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted",
											isActive
												? "text-primary"
												: "text-muted-foreground hover:text-foreground",
										)}
									>
										Services
										<ChevronDown className="size-3.5" />
									</button>
									<div className="absolute left-0 top-full hidden group-hover:block z-50 pt-1">
										<div className="min-w-[220px] rounded-lg border bg-popover p-1.5 shadow-md">
											<Link
												href="/services"
												className="block rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
											>
												All Services
											</Link>
											{serviceLinks.map((sl) => (
												<Link
													key={sl.href}
													href={sl.href}
													className="block rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors"
												>
													{sl.label}
												</Link>
											))}
										</div>
									</div>
								</div>
							);
						}
						return (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"px-3 py-2 text-sm font-medium rounded-md transition-colors",
									isActive
										? "text-primary"
										: "text-muted-foreground hover:text-foreground hover:bg-muted",
								)}
							>
								{link.label}
							</Link>
						);
					})}
				</div>

				<div className="hidden md:flex items-center gap-3">
					<Button render={<Link href="/contact" />} size="lg">
						Book a Consultation
					</Button>
				</div>

				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger render={<Button variant="ghost" size="icon-lg" aria-label="Open menu" />}>
							<Menu className="size-5" />
						</SheetTrigger>
						<SheetContent side="left" className="w-[280px] p-0">
							<SheetTitle className="sr-only">Navigation</SheetTitle>
							<div className="flex flex-col h-full">
								<div className="p-4 border-b">
									<Logo />
								</div>
								<div className="flex-1 p-4">
									<div className="flex flex-col gap-1">
										{navLinks.map((link) => {
											const isActive = pathname === link.href;
											return (
												<Link
													key={link.href}
													href={link.href}
													className={cn(
														"px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
														isActive
															? "bg-primary/10 text-primary"
															: "text-muted-foreground hover:text-foreground hover:bg-muted",
													)}
												>
													{link.label}
												</Link>
											);
										})}
										<div className="mt-2 pt-2 border-t">
											<p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
												Services
											</p>
											{serviceLinks.map((sl) => (
												<Link
													key={sl.href}
													href={sl.href}
													className={cn(
														"block px-3 py-2 text-sm rounded-md transition-colors",
														pathname === sl.href
															? "bg-primary/10 text-primary"
															: "text-muted-foreground hover:text-foreground hover:bg-muted",
													)}
												>
													{sl.label}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="p-4 border-t">
									<Button render={<Link href="/contact" />} className="w-full" size="lg">
										Book a Consultation
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
