import { SectionWrapper } from "@/components/sections/section-wrapper";

export function VisionMission() {
	return (
		<SectionWrapper className="bg-primary">
			<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Our Vision
					</p>
					<blockquote className="mt-4 text-2xl font-semibold text-white leading-snug sm:text-3xl">
						To become the most trusted consulting partner in financial
						management, governance, and business transformation across the
						globe.
					</blockquote>
				</div>
				<div>
					<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
						Our Mission
					</p>
					<blockquote className="mt-4 text-lg text-white/70 leading-relaxed">
						To empower organisations through innovative, practical, and
						sustainable consulting solutions that enhance performance,
						accountability, compliance, and long-term growth.
					</blockquote>
				</div>
			</div>
		</SectionWrapper>
	);
}
