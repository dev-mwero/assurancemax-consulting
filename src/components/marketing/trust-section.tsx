import { ShieldCheck, LockKeyhole, BadgeCheck, Handshake } from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";

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
			<div className="text-center max-w-2xl mx-auto mb-12">
				<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
					Why Trust AssuranceMax
				</p>
				<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Built on expertise, trust, and accountability
				</h2>
				<p className="mt-4 text-muted-foreground leading-relaxed">
					We bring professional knowledge and practical understanding to every
					engagement, helping organisations make better financial and operational
					decisions.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{trustPillars.map((pillar) => {
					const Icon = pillar.icon;
					return (
						<div
							key={pillar.title}
							className="rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
						>
							<div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
								<Icon className="size-6 text-primary" />
							</div>
							<h3 className="mt-4 text-base font-semibold text-foreground">
								{pillar.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
								{pillar.description}
							</p>
						</div>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
