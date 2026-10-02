import type { SMTPPoolOptions, Transporter } from "nodemailer";
import nodemailer from "nodemailer";
import { contactInfo, siteConfig } from "./constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class SmtpConfigurationError extends Error {
  constructor(problems: string[]) {
    super(
      `SMTP is not configured: ${problems.join("; ")}. Set these in .env for local development and in the Vercel dashboard for production.`,
    );
    this.name = "SmtpConfigurationError";
  }
}

export class SmtpDeliveryError extends Error {
  constructor(
    readonly cause: unknown,
    readonly recipient: string,
  ) {
    const detail = cause instanceof Error ? cause.message : String(cause);
    super(`Failed to deliver mail to ${recipient}: ${detail}`);
    this.name = "SmtpDeliveryError";
  }
}

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
}

function resolveConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim() || user || "";

  const problems: string[] = [];
  if (!host) problems.push("SMTP_HOST is missing or empty");
  if (!user) problems.push("SMTP_USER is missing or empty");
  if (!pass) problems.push("SMTP_PASS is missing or empty");
  if (host && !EMAIL_PATTERN.test(from)) {
    problems.push(
      "SMTP_FROM must be a full email address, because the SMTP login is often an account id rather than an address",
    );
  }
  if (problems.length > 0) throw new SmtpConfigurationError(problems);

  return {
    host: host as string,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    user: user as string,
    pass: pass as string,
    from,
  };
}

let transporter: Transporter | null = null;

function getTransport(): Transporter {
  if (transporter) return transporter;

  const config = resolveConfig();
  const options: SMTPPoolOptions = {
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
    pool: true,
    maxConnections: 2,
    maxMessages: 50,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
  };

  transporter = nodemailer.createTransport(options);
  return transporter;
}

export interface SendMailOptions {
  subject: string;
  html: string;
  text?: string;
  to?: string | string[];
  replyTo?: string;
}

export function isSmtpConfigured(): boolean {
  try {
    resolveConfig();
    return true;
  } catch {
    return false;
  }
}

export async function sendMail({
  subject,
  html,
  text,
  to,
  replyTo,
}: SendMailOptions) {
  const config = resolveConfig();
  const recipient = to ?? contactInfo.email;

  try {
    return await getTransport().sendMail({
      from: `${siteConfig.name} <${config.from}>`,
      to: recipient,
      replyTo,
      subject,
      html,
      text,
      headers: {
        "X-Mailer": siteConfig.shortName,
        "X-AuthUser": config.user,
      },
    });
  } catch (error) {
    throw new SmtpDeliveryError(
      error,
      Array.isArray(recipient) ? recipient.join(", ") : recipient,
    );
  }
}

export interface TrySendMailContext {
  source: string;
  identifier: string;
}

export async function trySendMail(
  options: SendMailOptions,
  { source, identifier }: TrySendMailContext,
): Promise<boolean> {
  try {
    const info = await sendMail(options);
    console.info(
      `[email] ${source} delivered to ${options.to ?? contactInfo.email} messageId=${info.messageId}`,
    );
    return true;
  } catch (error) {
    if (error instanceof SmtpConfigurationError) {
      console.error(
        `[email] ${source} not attempted for ${identifier}: ${error.message}`,
      );
    } else if (error instanceof SmtpDeliveryError) {
      console.error(
        `[email] ${source} failed for ${identifier}: ${error.cause instanceof Error ? error.cause.message : error.message}`,
      );
    } else {
      console.error(`[email] ${source} failed for ${identifier}:`, error);
    }
    return false;
  }
}

export async function verifySmtpConnection() {
  return getTransport().verify();
}
