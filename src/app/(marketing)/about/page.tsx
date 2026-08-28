import type { Metadata } from "next";
import Image from "next/image";
import { CoreValues } from "@/components/marketing/core-values";
import { VisionMission } from "@/components/marketing/vision-mission";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AssuranceMax Consulting Ltd — our vision, mission, values, and approach to professional consulting.",
};

export default function AboutPage() {
  return (
    <>
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
              AssuranceMax Consulting Ltd is a professional consulting firm
              specialising in financial management, accounting, governance,
              compliance, business advisory, and business transformation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work with organisations that need professional support to improve
              their financial processes, strengthen governance, meet statutory
              obligations, and prepare for sustainable growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our approach is practical and client-focused. We listen first,
              understand your specific situation, and then provide recommendations
              that can actually be implemented within your organisation&apos;s
              capacity and resources.
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
            Every engagement begins with understanding. We take time to learn
            about your business, your challenges, and your objectives before
            suggesting any solution. This ensures our recommendations are
            relevant, practical, and aligned to your goals.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe in building long-term relationships based on trust,
            professionalism, and results. Our role is not just to advise but to
            support implementation and help your organisation sustain
            improvements over time.
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
