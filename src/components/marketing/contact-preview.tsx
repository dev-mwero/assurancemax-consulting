"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { contactInfo } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

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
							<div className="flex items-start gap-3">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 shadow-inner">
									<svg
										className="size-5 text-[#25D366]"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
									</svg>
								</div>
								<div>
									<a
										href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-medium text-foreground hover:text-[#25D366] transition-colors duration-200"
									>
										Chat on WhatsApp
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
						<div className="mt-6">
							<ContactForm />
						</div>
						<div className="mt-6">
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
