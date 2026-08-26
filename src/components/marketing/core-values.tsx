import {
	BadgeCheck,
	CircleCheck,
	GraduationCap,
	Heart,
	Lightbulb,
	LockKeyhole,
	ShieldCheck,
} from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { coreValues } from "@/data/core-values";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	BadgeCheck,
	GraduationCap,
	CircleCheck,
	Lightbulb,
	Heart,
	ShieldCheck,
	LockKeyhole,
};

export function CoreValues() {
	return (
		<SectionWrapper className="bg-muted/30">
			<Reveal>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Our Core Values
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						The principles that guide us
					</h2>
				</div>
			</Reveal>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{coreValues.map((value, i) => {
					const Icon = iconMap[value.icon] || BadgeCheck;
					return (
						<Reveal key={value.id} delay={i * 80}>
							<div className="rounded-2xl glass-muted gradient-border-top p-5 shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
								<div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-inner">
									<Icon className="size-5 text-primary" />
								</div>
								<h3 className="mt-3 text-base font-semibold text-foreground">
									{value.title}
								</h3>
								<p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
									{value.description}
								</p>
							</div>
						</Reveal>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
