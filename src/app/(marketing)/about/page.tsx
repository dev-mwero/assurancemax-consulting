import type { Metadata } from "next";
import Image from "next/image";
import { CoreValues } from "@/components/marketing/core-values";
import { VisionMission } from "@/components/marketing/vision-mission";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about AssuranceMax Consulting Ltd — our vision, mission, values, and approach to professional consulting.",
  path: "/about",
  keywords: [
    "about AssuranceMax",
    "consulting firm Kenya",
    "company values",
    "business advisory team",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke"}/`,
          },
          {
            name: "About",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke"}/about`,
          },
        ])}
      />

      <PageHeader
        title="About AssuranceMax"
        description="Professional consulting in financial management, governance, compliance, and business transformation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Who We Are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AssuranceMax Consulting Ltd is a Kenyan consulting firm
              specialising in financial management, accounting, governance,
              compliance, and business advisory.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We help businesses, non-profits, and growing enterprises improve
              financial processes, strengthen governance, meet KRA and statutory
              obligations, and prepare for sustainable growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our approach is practical and client-focused. We listen first,
              understand your situation, then recommend steps you can implement
              with the resources you have.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl aspect-[4/3]">
            <Image
              src="/images/about-consultant.jpg"
              alt="AssuranceMax principal consultant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </SectionWrapper>

      <VisionMission />

      <SectionWrapper className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground">Our Approach</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every engagement begins with understanding. We learn about your
            business, challenges, and objectives before suggesting a solution,
            so our recommendations stay relevant and practical.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We build long-term relationships based on trust, professionalism,
            and results. We support implementation so improvements last.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-secondary/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Why Work With AssuranceMax
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-left">
            {[
              "Professional expertise applied to your specific situation",
              "Practical recommendations you can implement",
              "Confidential handling of sensitive information",
              "Focus on sustainable, long-term improvement",
              "Responsive, dependable service delivery",
              "Solutions aligned to your organisational objectives",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-secondary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CoreValues />
    </>
  );
}
