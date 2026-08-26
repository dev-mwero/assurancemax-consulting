import {
	Search,
	ClipboardCheck,
	Lightbulb,
	Rocket,
	Headphones,
} from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
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
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
				{processSteps.map((step) => {
					const Icon = iconMap[step.icon] || Search;
					return (
						<div
							key={step.id}
							className="relative rounded-xl border bg-card p-6 text-center shadow-sm"
						>
							<span className="text-3xl font-bold text-primary/20">
								{step.number}
							</span>
							<div className="mx-auto mt-3 flex size-10 items-center justify-center rounded-full bg-secondary/10">
								<Icon className="size-5 text-secondary" />
							</div>
							<h3 className="mt-3 text-base font-semibold text-foreground">
								{step.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
								{step.description}
							</p>
						</div>
					);
				})}
			</div>
		</SectionWrapper>
	);
}
