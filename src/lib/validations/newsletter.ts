import { z } from "zod";
import { HoneypotSchema } from "@/lib/email/honeypot";

export const NewsletterSchema = HoneypotSchema.extend({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your email address")
    .max(254, "Email address is too long")
    .email("Please enter a valid email address"),
});

export type NewsletterInput = z.infer<typeof NewsletterSchema>;
