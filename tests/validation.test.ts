import { describe, expect, it } from "vitest";
import { inquirySchema } from "@/lib/validation";

describe("inquiry validation", () => {
  it("accepts a complete demonstration inquiry", () => {
    const result = inquirySchema.safeParse({ name: "Avery Chen", email: "avery@example.com", phone: "", inquiryType: "Artwork inquiry", artwork: "Mineral Field", message: "Please share more information about this demonstration work.", privacy: true, website: "" });
    expect(result.success).toBe(true);
  });

  it("rejects short messages and invalid email addresses", () => {
    const result = inquirySchema.safeParse({ name: "A", email: "bad", inquiryType: "General inquiry", message: "Too short", privacy: false, website: "" });
    expect(result.success).toBe(false);
  });
});
