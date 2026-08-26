import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { siteConfig, contactInfo, navLinks, serviceSlugs } from "@/lib/constants";

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
		<footer className="border-t bg-muted/30">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
					<div className="sm:col-span-2 lg:col-span-1">
						<Logo />
						<p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
							{siteConfig.slogan}
						</p>
						<p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
							Professional consulting in financial management, governance,
							compliance, and business transformation.
						</p>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
							{legalLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">
							Our Services
						</h3>
						<ul className="mt-3 space-y-2">
							{serviceLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-sm font-semibold text-foreground">
							Contact
						</h3>
						<ul className="mt-3 space-y-3">
							<li className="flex items-start gap-2 text-sm text-muted-foreground">
								<MapPin className="size-4 mt-0.5 shrink-0" />
								<span>
									{contactInfo.address.street}
									<br />
									{contactInfo.address.city}, {contactInfo.address.country}
								</span>
							</li>
							<li>
								<a
									href={`tel:${contactInfo.phone}`}
									className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<Phone className="size-4 shrink-0" />
									{contactInfo.phone}
								</a>
							</li>
							<li>
								<a
									href={`mailto:${contactInfo.email}`}
									className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<Mail className="size-4 shrink-0" />
									{contactInfo.email}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} {siteConfig.name}. All rights
						reserved.
					</p>
					<p className="text-xs text-muted-foreground italic">
						{siteConfig.slogan}
					</p>
				</div>
			</div>
		</footer>
	);
}
