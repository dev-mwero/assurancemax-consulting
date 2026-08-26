import { BadgeCheck, Handshake, LockKeyhole, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";

const trustPillars = [
	{
		icon: ShieldCheck,
		title: "Professional Expertise",
		description:
			"Knowledgeable professionals with practical understanding of financial management, governance, and compliance.",
	},
	{
		icon: LockKeyhole,
		title: "Confidentiality",
		description:
			"Your sensitive financial and organisational information is handled with discretion and care.",
	},
	{
		icon: BadgeCheck,
		title: "Compliance Focus",
		description:
			"We help you meet statutory obligations and maintain proper governance frameworks.",
	},
	{
		icon: Handshake,
		title: "Client-Centered",
		description:
			"Solutions aligned to your specific objectives, not one-size-fits-all templates.",
	},
];

export function TrustSection() {
	return (
		<SectionWrapper className="bg-muted/30">
			<Reveal>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Why Trust AssuranceMax
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Built on expertise, trust, and accountability
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						We bring professional knowledge and practical understanding to every
						engagement, helping organisations make better financial and
						operational decisions.
					</p>
				</div>
			</Reveal>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{trustPillars.map((pillar, i) => {
					const Icon = pillar.icon;
					return (
						<Reveal key={pillar.title} delay={i * 100}>
							<div className="rounded-2xl glass-muted gradient-border-top p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
								<div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-inner">
									<Icon className="size-6 text-primary" />
								</div>
								<h3 className="mt-4 text-base font-semibold text-foreground">
									{pillar.title}
								</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{pillar.description}
								</p>
							</div>
						</Reveal>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
