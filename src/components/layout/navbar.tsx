"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
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
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-300",
				scrolled
					? "bg-primary/80 backdrop-blur-xl shadow-lg shadow-primary/10 border-b border-white/10"
					: "bg-primary",
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
											"inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
											isActive
												? "text-secondary"
												: "text-white/70 hover:text-white hover:bg-white/10",
										)}
									>
										Services
										<ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
									</button>
									<div className="absolute left-0 top-full hidden group-hover:block z-50 pt-2">
										<div className="min-w-[240px] rounded-xl glass-dark p-2 shadow-2xl">
											<Link
												href="/services"
												className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all"
											>
												All Services
											</Link>
											{serviceLinks.map((sl) => (
												<Link
													key={sl.href}
													href={sl.href}
													className="block rounded-lg px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all"
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
									"relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
									isActive
										? "text-secondary"
										: "text-white/70 hover:text-white hover:bg-white/10",
								)}
							>
								{link.label}
								{isActive && (
									<span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-secondary" />
								)}
							</Link>
						);
					})}
				</div>

				<div className="hidden md:flex items-center gap-3">
					<Button
						render={<Link href="/contact" />}
						size="lg"
						nativeButton={false}
						className="bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
					>
						Book a Consultation
					</Button>
				</div>

				<div className="md:hidden">
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger
							render={
								<Button
									variant="ghost"
									size="icon-lg"
									aria-label="Open menu"
									className="text-white hover:bg-white/10"
								/>
							}
						>
							{open ? <X className="size-5" /> : <Menu className="size-5" />}
						</SheetTrigger>
						<SheetContent side="left" className="w-[300px] p-0 border-0">
							<SheetTitle className="sr-only">Navigation</SheetTitle>
							<div className="flex flex-col h-full bg-primary">
								<div className="p-5 border-b border-white/10">
									<Logo />
								</div>
								<div className="flex-1 p-5 overflow-y-auto">
									<div className="flex flex-col gap-1">
										{navLinks.map((link, i) => {
											const isActive = pathname === link.href;
											return (
												<Link
													key={link.href}
													href={link.href}
													style={{ animationDelay: `${i * 50}ms` }}
													className={cn(
														"animate-slide-in-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
														isActive
															? "bg-secondary/20 text-secondary"
															: "text-white/70 hover:text-white hover:bg-white/10",
													)}
												>
													{link.label}
												</Link>
											);
										})}
										<div className="mt-4 pt-4 border-t border-white/10">
											<p className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
												Services
											</p>
											{serviceLinks.map((sl, i) => (
												<Link
													key={sl.href}
													href={sl.href}
													style={{ animationDelay: `${(navLinks.length + i) * 50}ms` }}
													className={cn(
														"animate-slide-in-left block px-4 py-2.5 text-sm rounded-xl transition-all duration-200",
														pathname === sl.href
															? "bg-secondary/20 text-secondary"
															: "text-white/60 hover:text-white hover:bg-white/10",
													)}
												>
													{sl.label}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="p-5 border-t border-white/10">
									<Button
										render={<Link href="/contact" />}
										className="w-full bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
										size="lg"
										nativeButton={false}
									>
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
