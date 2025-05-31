import { z } from "zod";

export const contactUsValidation = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(3, { message: "must be more than 3 charcters" })
    .max(20, { message: "Max 20 charcters" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  subject: z
    .string()
    .min(1, { message: "Subject is required" })
    .min(6, { message: "must be more than 12 charcters" })
    .max(50, { message: "Max 50 charcters" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(12, { message: "must be more than 20 charcters" })
    .max(500, { message: "Max 500 charcters" }),
});

export type ContactUsValidationSchema = z.infer<typeof contactUsValidation>;
