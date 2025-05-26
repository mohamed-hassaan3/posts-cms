import { z } from "zod";

export const formValidation = z.object({
  name: z
    .string({message: "Name is Required"})
    .min(3, { message: "must be more than 3 charcters" })
    .max(20, { message: "Max 20 charcters" }),
  email: z.string({message: "Email is Required"}).email(),
  subject: z
    .string({message: "Subject is Required"})
    .min(12, { message: "must be more than 12 charcters" })
    .max(50, { message: "Max 50 charcters" }),
  message: z
    .string({message: "Message is Required"})
    .min(20, { message: "must be more than 20 charcters" })
    .max(500, { message: "Max 500 charcters" }),
});
