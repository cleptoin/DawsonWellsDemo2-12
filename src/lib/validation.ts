import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().max(40).optional(),
  inquiryType: z.enum(["Artwork inquiry", "Gallery visit", "Press and editorial", "General inquiry"]),
  artwork: z.string().trim().max(160).optional(),
  message: z.string().trim().min(20, "Add at least 20 characters so the gallery has enough context."),
  privacy: z.literal(true, { error: "Acknowledge the privacy notice to continue." }),
  website: z.string().max(0, "Spam check failed."),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
