import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { contactInfo, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the provision of professional consulting services by AssuranceMax Consulting Ltd.",
};

export default function TermsPage() {
  const effectiveDate = "27 August 2026";

  return (
    <>
      <PageHeader
        title="Terms of Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose prose-sm">
          <p className="text-muted-foreground text-sm">
            Effective Date: {effectiveDate}
          </p>

          <p className="text-muted-foreground">
            These Terms of Service (&quot;Terms&quot;) govern the provision of
            professional consulting services by AssuranceMax Consulting Ltd
            (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to our clients
            (&quot;you&quot; or &quot;Client&quot;). By engaging our services,
            you agree to be bound by these Terms in accordance with the{" "}
            <strong>Companies Act, 2015</strong>, the{" "}
            <strong>Consumer Protection Act, 2012</strong>, the{" "}
            <strong>Law of Contract Act</strong> (Cap 23), and other applicable
            laws of the Republic of Kenya.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            1. Definitions and Interpretation
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>&quot;Engagement&quot;</strong> means the agreement between
              us and the Client for the provision of Services, as set out in a
              written proposal, letter of engagement, or contract.
            </li>
            <li>
              <strong>&quot;Services&quot;</strong> means the professional
              consulting services to be provided by us, as described in the
              Engagement.
            </li>
            <li>
              <strong>&quot;Confidential Information&quot;</strong> means any
              information disclosed by either party that is designated as
              confidential or that reasonably should be understood to be
              confidential.
            </li>
            <li>
              <strong>&quot;Deliverables&quot;</strong> means the work products,
              reports, analyses, and other outputs produced as part of the
              Services.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            2. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground">
            These Terms become binding upon the earlier of: (a) your written
            acceptance of our proposal or letter of engagement; (b) your
            payment of any advance or deposit required; or (c) your continued
            use of our Services following receipt of these Terms. If you do not
            agree to these Terms, you must not engage our Services.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            3. Scope of Services
          </h2>
          <p className="text-muted-foreground">
            The specific scope, deliverables, and timelines for the Services
            shall be as set out in the relevant Engagement document. We shall
            perform the Services with reasonable care and skill in accordance
            with generally accepted professional standards applicable in Kenya,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Standards issued by the <strong>Institute of Certified Public
              Accountants of Kenya</strong> (ICPAK).
            </li>
            <li>
              Requirements of the <strong>Companies Act, 2015</strong> relating
              to accounting records and financial reporting.
            </li>
            <li>
              Applicable provisions of the <strong>Income Tax Act</strong>,{" "}
              <strong>VAT Act</strong>, and other revenue legislation
              administered by the Kenya Revenue Authority.
            </li>
            <li>
              The <strong>Public Finance Management Act, 2012</strong> where
              applicable to public sector engagements.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            4. Client Obligations
          </h2>
          <p className="text-muted-foreground">
            The Client shall:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Provide accurate, complete, and timely information and
              documentation necessary for us to perform the Services.
            </li>
            <li>
              Designate a primary contact person with authority to make
              decisions and provide approvals on behalf of the Client.
            </li>
            <li>
              Ensure compliance with all applicable laws and regulations in
              connection with the subject matter of the Services.
            </li>
            <li>
              Review Deliverables promptly and notify us of any issues or
              required corrections within a reasonable time.
            </li>
            <li>
              Make payment in accordance with the payment terms set out in the
              Engagement.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            5. Fees and Payment
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Our fees shall be as set out in the Engagement or as agreed in
              writing between the parties.
            </li>
            <li>
              Unless otherwise specified, all fees are quoted in Kenya Shillings
              (KES) and are exclusive of Value Added Tax (VAT), which shall be
              charged at the prevailing rate as required by the{" "}
              <strong>VAT Act, 2013</strong>.
            </li>
            <li>
              Invoices are payable within thirty (30) days of the date of
              invoice, or as otherwise specified in the Engagement.
            </li>
            <li>
              Late payments shall accrue interest at a rate of two percent (2%)
              per month or the maximum rate permitted by law, whichever is
              lower, calculated from the due date until the date of actual
              payment.
            </li>
            <li>
              We reserve the right to suspend or terminate the Services if
              payment is not received within the specified period.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            6. Confidentiality
          </h2>
          <p className="text-muted-foreground">
            Each party shall maintain the confidentiality of all Confidential
            Information received from the other party and shall not disclose
            such information to any third party without the prior written consent
            of the disclosing party, except:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              As required by law, regulation, or order of a court or
              regulatory authority.
            </li>
            <li>
              To professional advisors, auditors, or regulators who are bound
              by obligations of confidentiality.
            </li>
            <li>
              To employees or contractors who need access to the information
              to perform their duties and are bound by confidentiality
              obligations.
            </li>
          </ul>
          <p className="text-muted-foreground">
            This confidentiality obligation survives the termination or
            expiration of the Engagement for a period of two (2) years.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            7. Intellectual Property
          </h2>
          <p className="text-muted-foreground">
            All intellectual property rights in pre-existing materials, systems,
            methodologies, and know-how used by us in providing the Services
            shall remain our property. Subject to full payment of all fees due,
            the Client shall receive a non-exclusive, perpetual licence to use
            the Deliverables for its internal business purposes. We may
            anonymise and aggregate data from engagements for the purpose of
            improving our services and developing industry benchmarks, provided
            that no client-identifiable information is disclosed.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            8. Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            To the maximum extent permitted by the laws of Kenya:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Our total aggregate liability to the Client arising out of or in
              connection with the Services shall not exceed the total fees paid
              by the Client under the relevant Engagement during the twelve (12)
              months immediately preceding the event giving rise to the claim.
            </li>
            <li>
              We shall not be liable for any indirect, incidental,
              consequential, special, or punitive damages, including but not
              limited to loss of profits, loss of revenue, or loss of business
              opportunities.
            </li>
            <li>
              We shall not be liable for any loss or damage arising from the
              Client&apos;s failure to provide accurate, complete, or timely
              information, or from any decision made by the Client based on our
              Deliverables.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Nothing in these Terms shall limit our liability for death or
            personal injury caused by our negligence, for fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded or
            limited under Kenyan law.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            9. Professional Standards and Independence
          </h2>
          <p className="text-muted-foreground">
            We are an independent professional consulting firm and are not
            affiliated with any regulatory body, government agency, or
            statutory authority. Our Services do not constitute statutory audit,
            statutory accounting, or any other function required by law to be
            performed by a person holding a specific statutory appointment,
            unless expressly stated otherwise in the Engagement. We comply with
            the ethical and professional standards of ICPAK and other
            applicable professional bodies.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            10. Conflict of Interest
          </h2>
          <p className="text-muted-foreground">
            We maintain a conflict of interest policy in accordance with
            professional standards. Before accepting an Engagement, we assess
            whether any conflict of interest exists. If a conflict is identified
            after commencement of an Engagement, we shall promptly disclose it
            to the Client and take appropriate steps to manage or resolve the
            conflict, which may include declining or terminating the Engagement.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            11. Anti-Money Laundering Compliance
          </h2>
          <p className="text-muted-foreground">
            In accordance with the <strong>Proceeds of Crime and Anti-Money
            Laundering Act, 2009</strong> and the{" "}
            <strong>Proceeds of Crime and Anti-Money Laundering Regulations</strong>,
            we are required to conduct customer due diligence on all clients.
            The Client shall provide all information and documentation requested
            for this purpose. We may be required to report suspicious
            transactions to the Financial Reporting Centre (FRC).
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            12. Data Protection
          </h2>
          <p className="text-muted-foreground">
            The collection, use, storage, and disclosure of personal data in
            connection with the Services is governed by our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and the <strong>Data Protection Act, 2019</strong>. By engaging our
            Services, you acknowledge that you have read and understood our
            Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            13. Termination
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              Either party may terminate an Engagement by providing thirty (30)
              days&apos; written notice to the other party.
            </li>
            <li>
              Either party may terminate an Engagement immediately by written
              notice if the other party commits a material breach of these Terms
              and fails to remedy such breach within fourteen (14) days of
              receiving written notice of the breach.
            </li>
            <li>
              Upon termination, the Client shall pay for all Services performed
              up to the date of termination, including any outstanding
              expenses incurred in connection with the Services.
            </li>
            <li>
              The provisions of Clauses 6 (Confidentiality), 7 (Intellectual
              Property), 8 (Limitation of Liability), and 14 (Dispute
              Resolution) shall survive termination.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            14. Dispute Resolution
          </h2>
          <p className="text-muted-foreground">
            Any dispute arising out of or in connection with these Terms or the
            Services shall be resolved in accordance with the following
            procedure:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>Negotiation:</strong> The parties shall first attempt to
              resolve the dispute through good-faith negotiation within
              fourteen (14) days of written notice of the dispute.
            </li>
            <li>
              <strong>Mediation:</strong> If negotiation fails, the parties
              shall submit the dispute to mediation under the rules of the{" "}
              <strong>Chartered Institute of Arbitrators (Kenya Branch)</strong>{" "}
              or another mutually agreed mediation service.
            </li>
            <li>
              <strong>Arbitration:</strong> If mediation fails, the dispute
              shall be referred to and finally resolved by arbitration in
              Nairobi in accordance with the{" "}
              <strong>Arbitration Act, 1995</strong> (Cap 49) and the
              Arbitration Rules made thereunder. The arbitration shall be
              conducted by a single arbitrator appointed by agreement of the
              parties or, failing agreement, in accordance with the Act.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Notwithstanding the foregoing, either party may seek urgent
            injunctive relief from the courts of Kenya where necessary to
            prevent irreparable harm.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            15. Force Majeure
          </h2>
          <p className="text-muted-foreground">
            Neither party shall be liable for any failure or delay in performing
            its obligations under these Terms to the extent that such failure or
            delay is caused by circumstances beyond its reasonable control,
            including but not limited to acts of God, natural disasters,
            epidemic or pandemic, war, terrorism, civil unrest, government
            actions, power failures, or disruptions to telecommunications
            networks. The affected party shall notify the other party promptly
            and use reasonable efforts to mitigate the effects of the force
            majeure event.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            16. Governing Law
          </h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with
            the laws of the Republic of Kenya. Any legal proceedings arising
            out of or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts of Kenya.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            17. Amendments
          </h2>
          <p className="text-muted-foreground">
            We reserve the right to amend these Terms from time to time. The
            current version will always be available on our website. Material
            changes will be communicated to existing clients in writing. Your
            continued engagement of our Services following notification of any
            changes constitutes acceptance of the amended Terms.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            18. Severability
          </h2>
          <p className="text-muted-foreground">
            If any provision of these Terms is found to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            19. Entire Agreement
          </h2>
          <p className="text-muted-foreground">
            These Terms, together with the Engagement document and any annexes
            or schedules referenced therein, constitute the entire agreement
            between the parties with respect to the subject matter hereof and
            supersede all prior and contemporaneous agreements,
            representations, and understandings.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            20. Contact Us
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us:
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
        </div>
      </SectionWrapper>
    </>
  );
}
