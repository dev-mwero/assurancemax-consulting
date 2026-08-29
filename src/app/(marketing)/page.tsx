import { ContactPreview } from "@/components/marketing/contact-preview";
import { CoreValues } from "@/components/marketing/core-values";
import { CTASection } from "@/components/marketing/cta-section";
import { FinancialClarity } from "@/components/marketing/financial-clarity";
import { Hero } from "@/components/marketing/hero";
import { IndustriesSection } from "@/components/marketing/industries-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { ServicesOverview } from "@/components/marketing/services-overview";

import { TrustSection } from "@/components/marketing/trust-section";
import { VisionMission } from "@/components/marketing/vision-mission";
import { WhyAssuranceMax } from "@/components/marketing/why-assurancemax";
import { FaqSection } from "@/components/sections/faq-section";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.slogan}`,
  absolute: true,
  path: "/",
  keywords: [
    "consulting Kenya",
    "financial management",
    "accounting services",
    "tax compliance Kenya",
    "governance",
    "business advisory",
    "Nairobi consultants",
  ],
});

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
      <CTASection />
      <FaqSection faqs={homeFaqs} />
      <ContactPreview />
    </>
  );
}
