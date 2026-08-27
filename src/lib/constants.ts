export const siteConfig = {
  name: "AssuranceMax Consulting Ltd",
  shortName: "AssuranceMax",
  slogan: "Where Expertise Inspires Confidence",
  description:
    "Professional consulting services in financial management, accounting, governance, compliance, business advisory, and business transformation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_KE",
} as const;

export const contactInfo = {
  email: "info@assurancemax.co.ke",
  phone: "+254733538538",
  phoneSecondary: "",
  whatsapp: "+254733538538",
  address: {
    street: "Nairobi CBD",
    city: "Nairobi",
    country: "Kenya",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceSlugs = [
  "bookkeeping",
  "accounting",
  "financial-management",
  "tax-compliance",
  "payroll-management",
  "governance-internal-controls",
  "business-advisory",
  "audit-support",
] as const;
