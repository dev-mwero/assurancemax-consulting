import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/marketing/cta-section";
import { ServiceCard } from "@/components/marketing/service-card";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AssuranceMax consulting services — financial management, accounting, tax compliance, payroll, governance, business advisory, and audit support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Professional consulting services designed to strengthen your financial management, governance, and organisational performance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <SectionWrapper>
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground leading-relaxed">
            We offer a range of consulting services that help organisations
            manage their finances, strengthen governance, meet compliance
            requirements, and improve overall performance. Each service is
            delivered with professionalism, practical understanding, and a focus
            on your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">
            Not sure what you need?
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            That is perfectly fine. Start with a conversation. We will help you
            identify where professional support can add the most value.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
          >
            Contact us
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
