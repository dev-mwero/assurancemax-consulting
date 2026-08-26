import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AssuranceMax Consulting Ltd.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose prose-sm">
          <p className="text-muted-foreground italic">
            [This is a placeholder privacy policy. Replace with actual legal
            content before launch. Consult with a legal professional to draft
            the appropriate privacy policy for your jurisdiction.]
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">
            Information We Collect
          </h2>
          <p className="text-muted-foreground">
            [To be replaced with actual information about data collection
            practices.]
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground">
            [To be replaced with actual information about data usage.]
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">
            Data Security
          </h2>
          <p className="text-muted-foreground">
            [To be replaced with actual information about data protection
            measures.]
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">Contact Us</h2>
          <p className="text-muted-foreground">
            For questions about this privacy policy, please contact us at
            [contact email placeholder].
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
