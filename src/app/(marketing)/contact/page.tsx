import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AssuranceMax Consulting Ltd. Book a consultation for financial management, governance, compliance, or business advisory support.",
};

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "We work with SMEs, startups, established businesses, NGOs, and growing enterprises that need professional financial management, governance, or compliance support.",
  },
  {
    question: "How do you ensure confidentiality?",
    answer:
      "We handle all client information with strict confidentiality and professional discretion. Sensitive financial and organisational data is protected at every stage of our engagement.",
  },
  {
    question: "What is your process?",
    answer:
      "We begin by understanding your needs, then assess your current position, provide practical recommendations, support implementation, and remain available for ongoing guidance.",
  },
{
        question: "Do you offer ongoing support?",
        answer:
          "Yes. We build long-term relationships with clients who need ongoing financial management, governance oversight, or periodic advisory support.",
      },
  {
    question: "How do I get started?",
    answer:
      "Contact us to schedule an initial consultation. We will discuss your needs and determine how best to support your organisation.",
  },
  {
    question: "What makes you different?",
    answer:
      "Our practical approach, professional standards, and genuine commitment to each client's success. We listen first, then provide tailored solutions that work within your organisation's capacity.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Ready for professional consulting support? Let us discuss your needs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <SectionWrapper>
        {/* Office photo */}
        <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl mb-12">
          <Image
            src="/images/contact-office.jpg"
            alt="AssuranceMax office in Nairobi CBD"
            width={1200}
            height={400}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Fill in the form below and we will respond promptly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                Contact Information
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Address
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.address.street}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.address.city}, {contactInfo.address.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                    {contactInfo.phoneSecondary && (
                      <>
                        <br />
                        <a
                          href={`tel:${contactInfo.phoneSecondary}`}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {contactInfo.phoneSecondary}
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                Why AssuranceMax?
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Professional expertise in financial management",
                  "Practical, implementable recommendations",
                  "Confidential handling of sensitive information",
                  "Client-focused, long-term approach",
                  "Responsive and dependable service",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
