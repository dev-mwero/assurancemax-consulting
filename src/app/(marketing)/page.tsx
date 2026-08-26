import { Hero } from "@/components/marketing/hero";
import { TrustSection } from "@/components/marketing/trust-section";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { WhyAssuranceMax } from "@/components/marketing/why-assurancemax";
import { FinancialClarity } from "@/components/marketing/financial-clarity";
import { ProcessSection } from "@/components/marketing/process-section";
import { VisionMission } from "@/components/marketing/vision-mission";
import { CoreValues } from "@/components/marketing/core-values";
import { IndustriesSection } from "@/components/marketing/industries-section";
import { Testimonials } from "@/components/marketing/testimonials";
import { CTASection } from "@/components/marketing/cta-section";
import { ContactPreview } from "@/components/marketing/contact-preview";

export default function HomePage() {
	return (
		<>
			<Hero />
			<TrustSection />
			<ServicesOverview />
			<WhyAssuranceMax />
			<FinancialClarity />
			<ProcessSection />
			<VisionMission />
			<CoreValues />
			<IndustriesSection />
			<Testimonials />
			<CTASection />
			<ContactPreview />
		</>
	);
}
