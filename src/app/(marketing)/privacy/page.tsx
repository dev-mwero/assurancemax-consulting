import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { contactInfo, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for AssuranceMax Consulting Ltd — how we collect, use, and protect your personal data in accordance with Kenyan law.",
};

export default function PrivacyPage() {
  const effectiveDate = "27 August 2026";

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
          <p className="text-muted-foreground text-sm">
            Effective Date: {effectiveDate}
          </p>

          <p className="text-muted-foreground">
            AssuranceMax Consulting Ltd (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is committed to protecting your privacy in
            accordance with the <strong>Constitution of Kenya (2010)</strong>, the{" "}
            <strong>Data Protection Act, 2019</strong> (Act No. 24 of 2019), the{" "}
            <strong>Computer Misuse and Cybercrimes Act, 2018</strong>, and other
            applicable Kenyan legislation. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your personal information when
            you visit our website or engage our professional services.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            1. Your Right to Privacy
          </h2>
          <p className="text-muted-foreground">
            Article 31 of the Constitution of Kenya guarantees every
            person&apos;s right to privacy, including the right not to have
            information relating to their family or private affairs unnecessarily
            required or revealed, and the right not to have the privacy of their
            communications infringed. We respect and uphold this constitutional
            right in all our dealings with client data.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            2. Information We Collect
          </h2>
          <p className="text-muted-foreground">
            We may collect the following categories of personal data:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Identity Data:</strong> Full name, national identification
              number, KRA PIN, and other government-issued identifiers as
              required for regulatory compliance.
            </li>
            <li>
              <strong>Contact Data:</strong> Email address, telephone number,
              postal address, and physical location.
            </li>
            <li>
              <strong>Financial Data:</strong> Business financial records,
              accounting information, payroll data, tax records, and related
              documentation necessary for the provision of our professional
              services.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, operating
              system, device information, and usage data collected through
              cookies and similar technologies.
            </li>
            <li>
              <strong>Professional Data:</strong> Business registration details,
              company records, governance documents, and employee information
              as relevant to our engagements.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            3. How We Use Your Information
          </h2>
          <p className="text-muted-foreground">
            We process personal data on the following lawful bases as provided
            under the Data Protection Act, 2019:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Performance of a Contract:</strong> To deliver the
              professional consulting services you have engaged us to provide.
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with tax laws,
              accounting regulations, reporting requirements, and other
              statutory obligations under the <strong>Income Tax Act</strong>,{" "}
              <strong>VAT Act</strong>, <strong>Public Finance Management Act</strong>,
              and <strong>Companies Act, 2015</strong>.
            </li>
            <li>
              <strong>Legitimate Interest:</strong> To improve our services,
              communicate with you, and ensure the security of our systems.
            </li>
            <li>
              <strong>Consent:</strong> Where you have given us explicit consent
              to process your data for a specific purpose.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            4. Data Disclosure and Sharing
          </h2>
          <p className="text-muted-foreground">
            We may share your personal data with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Regulatory authorities including the Kenya Revenue Authority
              (KRA), the Companies Registry, and the National Treasury, where
              required by law.
            </li>
            <li>
              Professional bodies such as the{" "}
              <strong>Institute of Certified Public Accountants of Kenya</strong>{" "}
              (ICPAK) in connection with audit or compliance obligations.
            </li>
            <li>
              Service providers and data processors who assist in delivering our
              services, subject to strict confidentiality obligations.
            </li>
            <li>
              Law enforcement agencies where disclosure is required under the{" "}
              <strong>Proceeds of Crime and Anti-Money Laundering Act</strong>{" "}
              or other applicable legislation.
            </li>
          </ul>
          <p className="text-muted-foreground">
            We do not sell, rent, or trade your personal information to third
            parties for their marketing purposes.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            5. Data Security
          </h2>
          <p className="text-muted-foreground">
            In accordance with the <strong>Computer Misuse and Cybercrimes Act,
            2018</strong> and the <strong>Data Protection Act, 2019</strong>, we
            implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Encryption of sensitive data in transit and at rest.</li>
            <li>Access controls limiting data access to authorised personnel.</li>
            <li>Regular security assessments and vulnerability testing.</li>
            <li>
              Staff training on data protection and confidentiality
              obligations.
            </li>
            <li>
              Secure data storage with appropriate backup and disaster recovery
              procedures.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            6. Data Retention
          </h2>
          <p className="text-muted-foreground">
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected, or as required by law.
            Accounting records and related financial data are retained in
            accordance with the <strong>Companies Act, 2015</strong> and the{" "}
            <strong>Income Tax Act</strong>, which require retention of
            accounting records for a minimum period of seven (7) years. Upon
            expiry of the retention period, personal data is securely deleted or
            anonymised.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            7. Your Rights Under the Data Protection Act, 2019
          </h2>
          <p className="text-muted-foreground">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Right of Access:</strong> To request access to the personal
              data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> To request correction of
              inaccurate or incomplete personal data.
            </li>
            <li>
              <strong>Right to Erasure:</strong> To request deletion of your
              personal data where there is no compelling reason for continued
              processing.
            </li>
            <li>
              <strong>Right to Object:</strong> To object to the processing of
              your personal data for specific purposes.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> To receive your
              personal data in a structured, commonly used, and
              machine-readable format.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> To withdraw consent at
              any time where processing is based on consent.
            </li>
          </ul>
          <p className="text-muted-foreground">
            To exercise any of these rights, please contact us using the details
            provided below.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            8. Cookies and Tracking Technologies
          </h2>
          <p className="text-muted-foreground">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and collect analytical data. You may
            control cookie preferences through your browser settings. Where
            non-essential cookies are used, we will obtain your consent in
            accordance with applicable data protection requirements.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            9. International Data Transfers
          </h2>
          <p className="text-muted-foreground">
            Where we transfer personal data outside of Kenya, we ensure that
            appropriate safeguards are in place as required under the Data
            Protection Act, 2019, including standard contractual clauses or
            adequacy determinations as applicable.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            10. Children&apos;s Privacy
          </h2>
          <p className="text-muted-foreground">
            Our services are directed to businesses and are not intended for
            individuals under the age of 18. We do not knowingly collect
            personal data from children. If we become aware that we have
            collected data from a child without parental consent, we will take
            steps to delete that information promptly.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            11. Changes to This Policy
          </h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors. The updated policy will be posted on this page with a
            revised effective date. We encourage you to review this policy
            periodically.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            12. Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, wish to
            exercise your data protection rights, or wish to file a complaint,
            please contact our Data Protection Officer:
          </p>
          <div className="mt-4 rounded-lg border bg-card p-4 text-muted-foreground text-sm">
            <p className="font-semibold text-foreground">
              AssuranceMax Consulting Ltd
            </p>
            <p>{contactInfo.address.street}</p>
            <p>
              {contactInfo.address.city}, {contactInfo.address.country}
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-primary hover:underline"
              >
                {contactInfo.phone}
              </a>
            </p>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            If you are not satisfied with our response, you have the right to
            lodge a complaint with the <strong>Office of the Data Protection
            Commissioner</strong> established under the Data Protection Act,
            2019.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
