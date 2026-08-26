import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/marketing/service-card";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Reveal } from "@/components/sections/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesOverview() {
	return (
		<SectionWrapper className="bg-secondary/[0.04]">
			<Reveal>
				<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-secondary">
							Our Services
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Comprehensive consulting solutions
						</h2>
						<p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
							Tailored professional services designed to strengthen your financial
							management, governance, and organisational performance.
						</p>
					</div>
					<Button
						render={<Link href="/services" />}
						variant="outline"
						nativeButton={false}
						className="shrink-0 self-start sm:self-auto"
					>
						View All Services
						<ArrowUpRight className="size-4" />
					</Button>
				</div>
			</Reveal>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{services.map((service, i) => (
					<Reveal key={service.id} delay={i * 80}>
						<ServiceCard service={service} />
					</Reveal>
				))}
			</div>
		</SectionWrapper>
	);
}
