import { describe, expect, it } from "vitest";
import { enquirySchema } from "@/lib/validation";

describe("enquiry validation", () => {
  it("accepts a complete demonstration enquiry", () => {
    const result = enquirySchema.safeParse({ name: "Avery Chen", email: "avery@example.com", phone: "", enquiryType: "Artwork enquiry", artwork: "Mineral Field", message: "Please share more information about this demonstration work.", privacy: true, website: "" });
    expect(result.success).toBe(true);
  });

  it("rejects short messages and invalid email addresses", () => {
    const result = enquirySchema.safeParse({ name: "A", email: "bad", enquiryType: "General enquiry", message: "Too short", privacy: false, website: "" });
    expect(result.success).toBe(false);
  });
});
