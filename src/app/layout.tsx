import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { WhatsAppChat } from "@/components/layout/whatsapp-chat";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultOgImage, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke",
  ),
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://assurancemax.co.ke",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "AssuranceMax Consulting Ltd",
    title: "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
    description:
      "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "AssuranceMax Consulting Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssuranceMax Consulting Ltd — Where Expertise Inspires Confidence",
    description:
      "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function OrganizationJsonLd() {
  return <JsonLd data={organizationJsonLd()} />;
}

function WebsiteJsonLd() {
  return <JsonLd data={websiteJsonLd()} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
