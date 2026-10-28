"use client";

import { Check, Copy, LoaderCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;

export function InquiryForm({ artwork }: { artwork?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "demo">("idle");
  const [copied, setCopied] = useState(false);
  const [messageText, setMessageText] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};
    if (String(data.get("name") ?? "").trim().length < 2) nextErrors.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? ""))) nextErrors.email = "Enter a valid email address.";
    if (String(data.get("message") ?? "").trim().length < 20) nextErrors.message = "Add at least 20 characters so the gallery has enough context.";
    if (data.get("privacy") !== "on") nextErrors.privacy = "Acknowledge the privacy notice to continue.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("loading");
    const payload = Object.fromEntries(data.entries());
    const response = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, privacy: true }) });
    const result = await response.json();
    if (!response.ok) {
      setErrors({ message: result.message ?? "The demonstration endpoint could not validate this message. Review the fields and try again." });
      setStatus("idle");
      return;
    }
    setMessageText(`Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "Not supplied"}\nType: ${payload.inquiryType}\nArtwork: ${payload.artwork || "Not specified"}\n\n${payload.message}`);
    setStatus("demo");
  }

  const copyMessage = async () => {
    await navigator.clipboard.writeText(messageText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field label="Full name" name="name" error={errors.name} required />
        <Field label="Email address" name="email" type="email" error={errors.email} required />
        <Field label="Phone number" name="phone" type="tel" hint="Optional" />
        <label className="field">
          <span>Inquiry type</span>
          <select name="inquiryType" defaultValue={artwork ? "Artwork inquiry" : "General inquiry"}>
            <option>Artwork inquiry</option><option>Gallery visit</option><option>Press and editorial</option><option>General inquiry</option>
          </select>
          <small aria-hidden="true">&nbsp;</small>
        </label>
      </div>
      <Field label="Artwork of interest" name="artwork" defaultValue={artwork} hint="Optional" />
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={6} aria-invalid={Boolean(errors.message)} aria-describedby="message-help" />
        <small id="message-help" className={errors.message ? "field-error" : ""}>{errors.message ?? "Tell us what you would like to know."}</small>
      </label>
      <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="privacy-check">
        <input type="checkbox" name="privacy" aria-invalid={Boolean(errors.privacy)} />
        <span>I understand this demonstration form has no configured delivery service and that my message will not be sent.</span>
      </label>
      {errors.privacy && <p className="field-error">{errors.privacy}</p>}
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <><LoaderCircle className="spinner" size={18} aria-hidden="true" /> Validating</> : "Prepare inquiry"}
      </button>
      {status === "demo" && (
        <div className="form-feedback" role="status">
          <Check size={20} aria-hidden="true" />
          <div>
            <strong>Your message is prepared, but it has not been sent.</strong>
            <p>The entered information remains in this page. Copy it now, or connect the documented form service before launch.</p>
            <button type="button" className="text-link" onClick={copyMessage}><Copy size={16} aria-hidden="true" /> {copied ? "Copied" : "Copy message"}</button>
          </div>
        </div>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", error, hint, required, defaultValue }: { label: string; name: string; type?: string; error?: string; hint?: string; required?: boolean; defaultValue?: string }) {
  const helpId = `${name}-help`;
  return (
    <label className="field">
      <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
      <input name={name} type={type} defaultValue={defaultValue} required={required} aria-required={required} aria-invalid={Boolean(error)} aria-describedby={helpId} />
      <small id={helpId} className={error ? "field-error" : ""}>{error ?? hint ?? "\u00A0"}</small>
    </label>
  );
}
