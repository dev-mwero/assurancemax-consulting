import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AssuranceMax Consulting Ltd",
    default:
      "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
  },
  description:
    "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation in Kenya.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "AssuranceMax Consulting Ltd",
    title: "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
    description:
      "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
    description:
      "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AssuranceMax Consulting Ltd",
    slogan: "Where Expertise Inspires Confidence",
    description:
      "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    serviceType: [
      "Financial Management",
      "Accounting",
      "Tax Compliance",
      "Payroll Management",
      "Governance",
      "Business Advisory",
      "Audit Support",
    ],
  };

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
