import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "The request was not valid JSON." }, { status: 400 }); }
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Review the inquiry fields." }, { status: 422 });
  }
  return NextResponse.json({
    accepted: false,
    demo: true,
    reference: `DW-DEMO-${Date.now()}`,
    message: "Validated locally. No email or external form service is configured, so nothing was sent.",
  });
}
