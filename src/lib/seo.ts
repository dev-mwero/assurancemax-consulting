import type { Metadata } from "next";
import { contactInfo, siteConfig } from "@/lib/constants";

export const defaultOgImage = "/og-image.png";

export const siteKeywords = [
  "consulting Kenya",
  "financial management",
  "accounting services",
  "tax compliance Kenya",
  "governance and internal controls",
  "business advisory",
  "payroll management",
  "audit support",
  "Nairobi consultants",
  "SME financial consulting",
];

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  images,
  keywords,
  noIndex = false,
  absolute = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  noIndex?: boolean;
  absolute?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title
    ? absolute
      ? title
      : `${title} | ${siteConfig.name}`
    : undefined;
  const ogImages = (images?.length ? images : [defaultOgImage]).map((src) => ({
    url: src,
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  }));

  return {
    title: absolute && title ? { absolute: title } : title,
    description,
    keywords: keywords ?? siteKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages.map((image) => image.url),
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export type JsonLdData = Record<string, unknown>;

export function organizationJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-full.png`,
    image: `${siteConfig.url}${defaultOgImage}`,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.street,
      addressCountry: contactInfo.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      email: contactInfo.email,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: [
      contactInfo.social.linkedin,
      contactInfo.social.twitter,
      contactInfo.social.facebook,
    ].filter(Boolean),
  };
}

export function websiteJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(
  items: { question: string; answer: string }[],
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  description: string;
  slug: string;
  image: string;
  benefits: string[];
  features: string[];
}): JsonLdData {
  const baseUrl = siteConfig.url;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${baseUrl}/services/${service.slug}`,
    image: `${baseUrl}${service.image}`,
    provider: {
      "@id": `${baseUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };
}
