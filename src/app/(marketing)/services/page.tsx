import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/marketing/cta-section";
import { ServiceCard } from "@/components/marketing/service-card";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { servicesFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore AssuranceMax consulting services — financial management, accounting, tax compliance, payroll, governance, business advisory, and audit support.",
  path: "/services",
  keywords: [
    "consulting services",
    "financial management",
    "accounting",
    "tax compliance",
    "payroll",
    "governance",
    "business advisory",
    "audit support",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke"}/`,
          },
          {
            name: "Services",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke"}/services`,
          },
        ])}
      />

      <PageHeader
        title="Our Services"
        description="Consulting services in Kenya that strengthen your financial management, governance, and performance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <SectionWrapper>
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground leading-relaxed">
            We offer consulting services that help you manage finances,
            strengthen governance, meet compliance requirements, and improve
            performance. Each service is tailored to your needs.
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

      <SectionWrapper className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">
            Standards and compliance
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our services are delivered with Kenyan regulatory requirements in
            mind, including the Companies Act 2015, the Tax Procedures Act, and
            KRA obligations such as VAT, PAYE, and corporate tax. Where
            statutory audit or assurance is needed, we work alongside
            ICPAK-aligned practitioners to keep your records and controls
            compliant.
          </p>
        </div>
      </SectionWrapper>

      <CTASection />
      <FaqSection faqs={servicesFaqs} title="Services FAQs" />
    </>
  );
}
