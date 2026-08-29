import { ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/marketing/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHeader } from "@/components/sections/page-header";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { serviceFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    images: [service.image],
    keywords: [
      service.title,
      "consulting Kenya",
      "professional services",
      "business support",
    ],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
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
          {
            name: service.title,
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke"}/services/${service.slug}`,
          },
        ])}
      />

      <PageHeader
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <SectionWrapper>
        {/* Service hero image */}
        <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl mb-12">
          <Image
            src={service.image}
            alt={service.title}
            width={1200}
            height={400}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {service.description} It is built for businesses, non-profits, and
          growing enterprises in Kenya that need reliable, compliant support
          without maintaining a full in-house finance team.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              What are the benefits of {service.title.toLowerCase()}?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Here is what this service delivers for your organisation.
            </p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              What does our {service.title.toLowerCase()} service include?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our {service.title.toLowerCase()} service includes:
            </p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-muted/40 p-6">
          <h2 className="text-xl font-bold text-foreground">
            Regulatory frameworks we align with
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Our work reflects Kenyan requirements, including the Companies Act
            2015, the Tax Procedures Act, and KRA filing obligations (VAT, PAYE,
            and corporate tax). Where assurance or statutory audit is required,
            we coordinate with ICPAK-aligned practitioners so your records and
            controls stand up to scrutiny.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">
              Interested in {service.title.toLowerCase()}?
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Contact us to discuss how this service can help your organisation.
            </p>
          </div>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            nativeButton={false}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to all services
          </Link>
        </div>
      </SectionWrapper>

      <CTASection />
      <FaqSection faqs={serviceFaqs} title={`${service.title} FAQs`} />
    </>
  );
}
