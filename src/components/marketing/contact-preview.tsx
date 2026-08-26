import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { contactInfo } from "@/lib/constants";

export function ContactPreview() {
	return (
		<SectionWrapper className="bg-secondary/[0.04]">
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<Reveal direction="left">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
							Get in Touch
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Let us discuss your needs
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							Ready to take the next step? Contact us for a professional
							consultation. We listen first, then provide practical guidance
							tailored to your situation.
						</p>
						<div className="mt-8 space-y-4">
							<div className="flex items-start gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-inner">
									<MapPin className="size-5 text-primary" />
								</div>
								<div>
									<p className="text-sm font-medium text-foreground">
										{contactInfo.address.street}
									</p>
									<p className="text-sm text-muted-foreground">
										{contactInfo.address.city}, {contactInfo.address.country}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-inner">
									<Phone className="size-5 text-primary" />
								</div>
								<div>
									<a
										href={`tel:${contactInfo.phone}`}
										className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200"
									>
										{contactInfo.phone}
									</a>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-inner">
									<Mail className="size-5 text-primary" />
								</div>
								<div>
									<a
										href={`mailto:${contactInfo.email}`}
										className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200"
									>
										{contactInfo.email}
									</a>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
				<Reveal direction="right">
					<div className="rounded-2xl glass gradient-border-top p-8 shadow-xl">
						<h3 className="text-lg font-semibold text-foreground">
							Send us a message
						</h3>
						<p className="mt-1 text-sm text-muted-foreground">
							Fill in the form and we will get back to you.
						</p>
						<div className="mt-6 space-y-4">
							<p className="text-sm text-muted-foreground italic">
								[Contact form will be rendered here]
							</p>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors duration-200"
							>
								Go to full contact page →
							</Link>
						</div>
					</div>
				</Reveal>
			</div>
		</SectionWrapper>
	);
}
