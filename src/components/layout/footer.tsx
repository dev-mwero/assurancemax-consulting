import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
	contactInfo,
	navLinks,
	serviceSlugs,
	siteConfig,
} from "@/lib/constants";

const serviceLinks = serviceSlugs.map((slug) => ({
	label: slug
		.split("-")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" "),
	href: `/services/${slug}`,
}));

const legalLinks = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms of Service", href: "/terms" },
];

export function Footer() {
	return (
		<footer className="relative bg-primary text-white">
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 lg:grid-cols-4">
					<div className="sm:col-span-2 lg:col-span-1">
						<Logo />
						<p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
							{siteConfig.slogan}
						</p>
						<p className="mt-2 text-sm text-white/60 leading-relaxed max-w-xs">
							Professional consulting in financial management, governance,
							compliance, and business transformation.
						</p>
						<div className="mt-6">
							<p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
								Stay Updated
							</p>
							<NewsletterForm />
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-white">
							Quick Links
						</h3>
						<ul className="mt-4 space-y-2.5">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-white/60 hover:text-secondary transition-colors duration-200"
									>
										{link.label}
									</Link>
								</li>
							))}
							{legalLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-white/60 hover:text-secondary transition-colors duration-200"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-white">
							Our Services
						</h3>
						<ul className="mt-4 space-y-2.5">
							{serviceLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-white/60 hover:text-secondary transition-colors duration-200"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="mt-4 space-y-4">
							<li className="flex items-start gap-3 text-sm text-white/60">
								<MapPin className="size-4 mt-0.5 shrink-0 text-secondary" />
								<span>
									{contactInfo.address.street}
									<br />
									{contactInfo.address.city}, {contactInfo.address.country}
								</span>
							</li>
							<li>
								<a
									href={`tel:${contactInfo.phone}`}
									className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary transition-colors duration-200"
								>
									<Phone className="size-4 shrink-0 text-secondary" />
									{contactInfo.phone}
								</a>
							</li>
							<li>
								<a
									href={`mailto:${contactInfo.email}`}
									className="flex items-center gap-3 text-sm text-white/60 hover:text-secondary transition-colors duration-200"
								>
									<Mail className="size-4 shrink-0 text-secondary" />
									{contactInfo.email}
								</a>
							</li>
						</ul>
					</div>
				</div>

			<div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-xs text-white/40">
					&copy; {new Date().getFullYear()} {siteConfig.name}. All rights
					reserved.
				</p>
				<a
					href="https://labs.mwenaro.com"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-secondary transition-all duration-300 hover:scale-105 animate-pulse-glow"
				>
					Designed &amp; engineered by
					<Image
						src="/mwenaro-logo.png"
						alt="Mwenaro Labs"
						width={20}
						height={20}
						className="rounded-sm"
					/>
					Mwenaro Labs
				</a>
			</div>
			</div>
		</footer>
	);
}
