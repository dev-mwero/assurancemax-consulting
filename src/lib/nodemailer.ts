import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { contactInfo, siteConfig } from "./constants";

const config: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER ?? "",
    pass: process.env.SMTP_PASS ?? "",
  },
};

const transporter = nodemailer.createTransport(config);

interface SendMailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail({ subject, html, replyTo }: SendMailOptions) {
  return transporter.sendMail({
    from: `"${siteConfig.name}" <${process.env.SMTP_USER}>`,
    to: contactInfo.email,
    replyTo,
    subject,
    html,
  });
}
