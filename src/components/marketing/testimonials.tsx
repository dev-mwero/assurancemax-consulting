import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
	const hasRealTestimonials = testimonials.some((t) => !t.name.startsWith("["));

	if (!hasRealTestimonials) {
		return (
			<SectionWrapper className="bg-muted/30">
				<Reveal>
					<div className="text-center max-w-2xl mx-auto">
						<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
							Client Testimonials
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							What our clients say
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed italic">
							[Testimonials will be added when verified client feedback is
							available. We do not fabricate testimonials.]
						</p>
					</div>
				</Reveal>
			</SectionWrapper>
		);
	}

	return (
		<SectionWrapper className="bg-muted/30">
			<Reveal>
				<div className="text-center max-w-2xl mx-auto mb-12">
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Client Testimonials
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						What our clients say
					</h2>
				</div>
			</Reveal>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial, i) => (
					<Reveal key={testimonial.id} delay={i * 100}>
						<div className="rounded-2xl glass-muted gradient-border-top p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/80">
							<blockquote className="text-sm text-muted-foreground leading-relaxed italic">
								&ldquo;{testimonial.quote}&rdquo;
							</blockquote>
							<div className="mt-4 pt-4 border-t border-border/50">
								<p className="text-sm font-semibold text-foreground">
									{testimonial.name}
								</p>
								{testimonial.role && (
									<p className="text-xs text-muted-foreground">
										{testimonial.role}
										{testimonial.company && ` at ${testimonial.company}`}
									</p>
								)}
							</div>
						</div>
					</Reveal>
				))}
			</div>
		</SectionWrapper>
	);
}
