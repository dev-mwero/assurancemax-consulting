import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";

const benefits = [
	"Professional consultation to understand your needs",
	"Practical, tailored recommendations",
	"Ongoing support for sustainable improvement",
];

export function CTASection() {
	return (
		<SectionWrapper className="relative overflow-hidden bg-primary">
			{/* Background image */}
			<div className="absolute inset-0">
				<Image
					src="/images/cta-handshake.jpg"
					alt="AssuranceMax Consulting Ltd representatives shaking hands with a client during a consultation"
					width={1200}
					height={600}
					className="w-full h-full object-cover opacity-20"
				/>
				<div className="absolute inset-0 bg-primary/80" />
			</div>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--secondary)_0%,transparent_50%)] opacity-10" />
			<div className="absolute -top-32 -right-32 size-96 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" />
			<div className="relative mx-auto max-w-3xl text-center">
				<Reveal>
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to strengthen your organisation?
					</h2>
				</Reveal>
				<Reveal delay={100}>
					<p className="mt-4 text-lg text-white/70 leading-relaxed">
						Whether you need help with financial management, governance,
						compliance, or business transformation, we are here to help.
					</p>
				</Reveal>
				<Reveal delay={200}>
					<ul className="mt-8 flex flex-col gap-3 items-center">
						{benefits.map((benefit) => (
							<li
								key={benefit}
								className="flex items-center gap-2 text-sm text-white/80"
							>
								<CheckCircle className="size-4 text-secondary shrink-0" />
								{benefit}
							</li>
						))}
					</ul>
				</Reveal>
				<Reveal delay={300}>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<Button
							render={<Link href="/contact" />}
							size="lg"
							nativeButton={false}
							className="bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 hover:-translate-y-0.5"
						>
							Book a Consultation
							<ArrowRight className="size-4" />
						</Button>
						<Button
							render={<Link href="/services" />}
							variant="outline"
							size="lg"
							nativeButton={false}
							className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
						>
							Explore Services
						</Button>
					</div>
				</Reveal>
			</div>
		</SectionWrapper>
	);
}
