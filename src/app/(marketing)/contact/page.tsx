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
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                    <svg
                      className="size-5 text-[#25D366]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                    >
                      Chat with us directly
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
