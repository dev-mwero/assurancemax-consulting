import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

function loadEnv() {
  try {
    const path = fileURLToPath(new URL("../.env", import.meta.url));
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const separator = trimmed.indexOf("=");
      if (separator === -1) continue;
      const key = trimmed.slice(0, separator).trim();
      const value = trimmed.slice(separator + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    console.warn("No .env file found, relying on the ambient environment.");
  }
}

loadEnv();

const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "SMTP_FROM"].filter(
  (key) => !process.env[key]?.trim(),
);

if (missing.length > 0) {
  console.error(`Cannot test: ${missing.join(", ")} not set in .env.`);
  console.error("MailBaby credentials live at https://my.interserver.net");
  process.exit(1);
}

const port = Number(process.env.SMTP_PORT) || 587;
const secure = process.env.SMTP_SECURE === "true";

console.log(`Host:  ${process.env.SMTP_HOST}`);
console.log(`Port:  ${port} (${secure ? "implicit TLS" : "STARTTLS"})`);
console.log(`From:  ${process.env.SMTP_FROM}`);
console.log(`To:    ${process.env.SMTP_TO}`);
console.log("");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  pool: true,
  maxConnections: 2,
  maxMessages: 50,
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 30000,
});

try {
  await transporter.verify();
  console.log("Connection: OK (credentials accepted)");
} catch (error) {
  console.error("Connection: FAILED");
  console.error(error.message);
  process.exit(1);
}

const to = process.argv[2] || process.env.SMTP_TO;

try {
  const info = await transporter.sendMail({
    from: `"AssuranceMax Consulting Ltd" <${process.env.SMTP_FROM}>`,
    to,
    subject: "AssuranceMax SMTP delivery test",
    text: "If you are reading this, SMTP delivery works.",
    html: "<p>If you are reading this, SMTP delivery works.</p><p>Sent from the AssuranceMax local test harness.</p>",
    headers: {
      "X-Mailer": "AssuranceMax",
      "X-AuthUser": process.env.SMTP_USER,
    },
  });
  console.log(`Delivered: ${info.accepted?.join(", ") || to}`);
  console.log(`messageId: ${info.messageId}`);
  console.log(`response:  ${info.response}`);
} catch (error) {
  console.error("Delivery: FAILED");
  console.error(error.message);
  process.exit(1);
}

transporter.close();
process.exit(0);
