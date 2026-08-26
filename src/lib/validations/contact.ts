import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be at most 20 characters")
    .optional()
    .or(z.literal("")),
  organization: z
    .string()
    .max(100, "Organisation name must be at most 100 characters")
    .optional()
    .or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
