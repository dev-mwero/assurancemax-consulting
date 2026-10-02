import { contactInfo, siteConfig } from "@/lib/constants";

const BRAND_PRIMARY = "#3f4718";
const BRAND_ACCENT = "#c79f30";
const BRAND_MUTED = "#717369";
const BRAND_BORDER = "#e5e5e0";
const BRAND_SURFACE = "#f7f7f4";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface LayoutProps {
  preheader: string;
  heading: string;
  intro?: string;
  content: string;
  cta?: { label: string; href: string };
}

export function emailLayout({
  preheader,
  heading,
  intro,
  content,
  cta,
}: LayoutProps): string {
  const button = cta
    ? `<tr><td style="padding:8px 32px 24px">
        <a href="${escapeHtml(cta.href)}" style="display:inline-block;background:${BRAND_PRIMARY};color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:6px;font-weight:600;font-size:14px">${escapeHtml(cta.label)}</a>
      </td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:#f2f2ef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1c1c18">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f2ef;padding:24px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid ${BRAND_BORDER}">
<tr><td style="background:${BRAND_PRIMARY};padding:20px 32px">
<div style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.2px">${escapeHtml(siteConfig.name)}</div>
<div style="color:${BRAND_ACCENT};font-size:12px;margin-top:2px">${escapeHtml(siteConfig.slogan)}</div>
</td></tr>
<tr><td style="padding:32px 32px 8px">
<h1 style="margin:0 0 8px;font-size:20px;line-height:1.3;color:#1c1c18">${escapeHtml(heading)}</h1>
${intro ? `<p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${BRAND_MUTED}">${escapeHtml(intro)}</p>` : ""}
</td></tr>
<tr><td style="padding:12px 32px 8px">${content}</td></tr>
${button}
<tr><td style="padding:24px 32px 28px;border-top:1px solid ${BRAND_BORDER}">
<p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND_MUTED}">
${escapeHtml(siteConfig.name)} &middot; ${escapeHtml(contactInfo.address.city)}, ${escapeHtml(contactInfo.address.country)}<br>
<a href="tel:${escapeHtml(contactInfo.phone)}" style="color:${BRAND_PRIMARY};text-decoration:none">${escapeHtml(contactInfo.phone)}</a>
&middot; <a href="mailto:${escapeHtml(contactInfo.email)}" style="color:${BRAND_PRIMARY};text-decoration:none">${escapeHtml(contactInfo.email)}</a>
</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

interface Field {
  label: string;
  value: string | undefined;
}

function fieldRows(fields: Field[]): string {
  const rows = fields
    .filter((field) => Boolean(field.value))
    .map(
      (field) => `<tr>
<td style="padding:10px 12px;background:${BRAND_SURFACE};border:1px solid ${BRAND_BORDER};width:38%;font-size:13px;font-weight:600;color:#1c1c18;vertical-align:top">${escapeHtml(field.label)}</td>
<td style="padding:10px 12px;border:1px solid ${BRAND_BORDER};font-size:13px;line-height:1.5;color:#1c1c18;word-break:break-word">${escapeHtml(field.value as string)}</td>
</tr>`,
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${rows}</table>`;
}

function messageBlock(message: string): string {
  return `<div style="margin-top:20px">
<div style="font-size:13px;font-weight:600;color:#1c1c18;margin-bottom:6px">Message</div>
<div style="padding:12px 14px;background:${BRAND_SURFACE};border-left:3px solid ${BRAND_ACCENT};border-radius:4px;font-size:14px;line-height:1.6;color:#1c1c18;white-space:pre-wrap;word-break:break-word">${escapeHtml(message)}</div>
</div>`;
}

function plainFields(fields: Field[]): string {
  return fields
    .filter((field) => Boolean(field.value))
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");
}

export interface SubmissionEmail {
  subject: string;
  html: string;
  text: string;
}

export function contactSubmissionEmail(data: {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  service?: string;
  message: string;
}): SubmissionEmail {
  const fields: Field[] = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Organisation", value: data.organization },
    { label: "Service required", value: data.service },
  ];

  return {
    subject: `Contact form submission from ${data.name}`,
    html: emailLayout({
      preheader: `New message from ${data.name}`,
      heading: "New contact form submission",
      intro: `Received from the website contact form. Reply directly to this email to respond to ${data.name}.`,
      content: fieldRows(fields) + messageBlock(data.message),
    }),
    text: [
      "New contact form submission",
      "",
      plainFields(fields),
      "",
      "Message:",
      data.message,
    ].join("\n"),
  };
}

export function inquirySubmissionEmail(data: {
  name: string;
  email: string;
  organization?: string;
  serviceInterest: string;
  preferredContact: string;
  message: string;
}): SubmissionEmail {
  const fields: Field[] = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Organisation", value: data.organization },
    { label: "Service interest", value: data.serviceInterest },
    { label: "Preferred contact", value: data.preferredContact },
  ];

  return {
    subject: `Quote request: ${data.serviceInterest} - ${data.name}`,
    html: emailLayout({
      preheader: `${data.name} requested a quote for ${data.serviceInterest}`,
      heading: "New quote request",
      intro: `Received from the website request form. Reply directly to this email to respond to ${data.name}.`,
      content: fieldRows(fields) + messageBlock(data.message),
    }),
    text: [
      "New quote request",
      "",
      plainFields(fields),
      "",
      "Message:",
      data.message,
    ].join("\n"),
  };
}

export function newsletterSignupEmail(data: {
  email: string;
}): SubmissionEmail {
  return {
    subject: "New newsletter subscription",
    html: emailLayout({
      preheader: `${data.email} subscribed to the newsletter`,
      heading: "New newsletter subscription",
      intro: "A visitor subscribed to the newsletter from the site footer.",
      content: fieldRows([{ label: "Email", value: data.email }]),
    }),
    text: ["New newsletter subscription", "", `Email: ${data.email}`].join(
      "\n",
    ),
  };
}

export function submissionAcknowledgementEmail(data: {
  name: string;
  kind: "message" | "quote request";
}): SubmissionEmail {
  return {
    subject: `We received your ${data.kind}`,
    html: emailLayout({
      preheader: `${siteConfig.name} has received your ${data.kind}`,
      heading: `Thank you, ${data.name}`,
      intro: `Your ${data.kind} has reached our team. We aim to respond within one business day.`,
      content: `<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#1c1c18">If you need anything in the meantime, call us on <a href="tel:${escapeHtml(contactInfo.phone)}" style="color:${BRAND_PRIMARY}">${escapeHtml(contactInfo.phone)}</a> or message us on WhatsApp.</p>`,
      cta: { label: "Browse our services", href: `${siteConfig.url}/services` },
    }),
    text: [
      `Thank you, ${data.name}`,
      "",
      `Your ${data.kind} has reached our team. We aim to respond within one business day.`,
      "",
      `Phone: ${contactInfo.phone}`,
      `Services: ${siteConfig.url}/services`,
    ].join("\n"),
  };
}
