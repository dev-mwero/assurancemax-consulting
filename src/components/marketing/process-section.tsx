import {
	ClipboardCheck,
	Headphones,
	Lightbulb,
	Rocket,
	Search,
} from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { processSteps } from "@/data/process-steps";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	Search,
	ClipboardCheck,
	Lightbulb,
	Rocket,
	Headphones,
};

export function ProcessSection() {
	return (
		<SectionWrapper className="bg-muted/30">
			<Reveal>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						How We Work
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						A clear, structured approach
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Every engagement follows a proven process that ensures we understand
						your needs and deliver practical, sustainable solutions.
					</p>
				</div>
			</Reveal>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
				{processSteps.map((step, i) => {
					const Icon = iconMap[step.icon] || Search;
					return (
						<Reveal key={step.id} delay={i * 100}>
							<div className="relative rounded-2xl glass-muted gradient-border-top p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
								<span className="text-3xl font-bold text-primary/20">
									{step.number}
								</span>
								<div className="mx-auto mt-3 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 shadow-inner">
									<Icon className="size-5 text-secondary" />
								</div>
								<h3 className="mt-3 text-base font-semibold text-foreground">
									{step.title}
								</h3>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{step.description}
								</p>
							</div>
						</Reveal>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
