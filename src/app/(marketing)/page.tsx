import { ContactPreview } from "@/components/marketing/contact-preview";
import { CoreValues } from "@/components/marketing/core-values";
import { CTASection } from "@/components/marketing/cta-section";
import { FinancialClarity } from "@/components/marketing/financial-clarity";
import { Hero } from "@/components/marketing/hero";
import { IndustriesSection } from "@/components/marketing/industries-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { Testimonials } from "@/components/marketing/testimonials";
import { TrustSection } from "@/components/marketing/trust-section";
import { VisionMission } from "@/components/marketing/vision-mission";
import { WhyAssuranceMax } from "@/components/marketing/why-assurancemax";

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
