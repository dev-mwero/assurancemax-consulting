import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/sections/section-wrapper";

const benefits = [
	"Professional consultation to understand your needs",
	"Practical, tailored recommendations",
	"Ongoing support for sustainable improvement",
];

export function CTASection() {
	return (
		<SectionWrapper className="bg-primary">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Ready to strengthen your organisation?
				</h2>
				<p className="mt-4 text-lg text-white/80 leading-relaxed">
					Whether you need help with financial management, governance,
					compliance, or business transformation, we are here to help.
				</p>
				<ul className="mt-8 flex flex-col gap-3 items-center">
					{benefits.map((benefit) => (
						<li
							key={benefit}
							className="flex items-center gap-2 text-sm text-white/90"
						>
							<CheckCircle className="size-4 text-secondary shrink-0" />
							{benefit}
						</li>
					))}
				</ul>
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Button
						render={<Link href="/contact" />}
						size="lg"
						className="bg-secondary text-white hover:bg-secondary/90"
					>
						Book a Consultation
						<ArrowRight className="size-4" />
					</Button>
					<Button
						render={<Link href="/services" />}
						variant="outline"
						size="lg"
						className="border-white/20 text-white hover:bg-white/10"
					>
						Explore Services
					</Button>
				</div>
			</div>
		</SectionWrapper>
	);
}
