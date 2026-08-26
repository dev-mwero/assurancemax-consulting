import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { industries } from "@/data/industries";

export function IndustriesSection() {
	return (
		<SectionWrapper className="bg-secondary/[0.04]">
			<Reveal>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Industries We Support
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Serving diverse organisations
					</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed">
						Our consulting services are relevant across sectors. We work with
						organisations of varying sizes and industries that need professional
						financial and governance support.
					</p>
				</div>
			</Reveal>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{industries.map((industry, i) => (
					<Reveal key={industry.id} delay={i * 60}>
						<div className="rounded-2xl glass gradient-border-top px-4 py-5 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
							<h3 className="text-sm font-semibold text-foreground">
								{industry.title}
							</h3>
							<p className="mt-1 text-xs text-muted-foreground leading-relaxed">
								{industry.description}
							</p>
						</div>
					</Reveal>
				))}
			</div>
		</SectionWrapper>
	);
}
