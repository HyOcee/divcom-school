"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import { WhatsAppGlyph } from "@/components/SocialIcons";
import { classLevels, whatsappLink } from "@/lib/content";

const classOptions = classLevels.flatMap((level) => level.classes);

type Variant = "admission" | "contact";

/**
 * There's no school email or server yet, so submitting composes the details
 * into a WhatsApp message to the school's number. Swap `handleSubmit` for an
 * API call or email service later without changing the form fields.
 */
export function EnquiryForm({ variant = "admission" }: { variant?: Variant }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines =
      variant === "admission"
        ? [
            "Hello DIVCOM, I'd like to enquire about admission.",
            "",
            `Parent/Guardian: ${get("parent")}`,
            `Phone: ${get("phone")}`,
            get("email") && `Email: ${get("email")}`,
            `Child's name: ${get("child")}`,
            `Child's date of birth: ${get("dob")}`,
            `Class applying for: ${get("class")}`,
            `Preferred start: ${get("start")}`,
            get("visit") === "yes" && "I would like to book a school visit.",
            get("message") && `\n${get("message")}`,
          ]
        : [
            `Hello DIVCOM, this is ${get("name")}.`,
            `Phone: ${get("phone")}`,
            `Subject: ${get("subject")}`,
            "",
            get("message"),
          ];

    window.open(whatsappLink(lines.filter((l) => l !== false && l !== "").join("\n")), "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-12">
        <CircleCheck className="mx-auto h-14 w-14 text-pink-500" aria-hidden />
        <h3 className="h-display mt-5 text-3xl">Thank you!</h3>
        <p className="mt-3 text-muted">
          WhatsApp has opened with your details. Just press <strong>send</strong> and our team will get back to you
          shortly.
        </p>
        <button type="button" onClick={() => setSent(false)} className="link-arrow mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-10"
    >
      {variant === "admission" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Parent / Guardian name" name="parent" required autoComplete="name" />
          <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" placeholder="080..." />
          <Field label="Email (optional)" name="email" type="email" autoComplete="email" className="sm:col-span-2" />
          <Field label="Child's full name" name="child" required />
          <Field label="Child's date of birth" name="dob" type="date" required />
          <label className="block">
            <span className="mb-2 block text-base font-semibold text-navy-900">Class applying for</span>
            <select name="class" required className="field" defaultValue="">
              <option value="" disabled>
                Select a class
              </option>
              {classOptions.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-base font-semibold text-navy-900">Preferred start</span>
            <select name="start" required className="field" defaultValue="">
              <option value="" disabled>
                Select a term
              </option>
              <option>As soon as possible</option>
              <option>Next term</option>
              <option>Next academic session (September)</option>
            </select>
          </label>
          <TextArea label="Anything else we should know? (optional)" name="message" />
          <label className="flex items-center gap-3 text-base text-navy-900 sm:col-span-2">
            <input type="checkbox" name="visit" value="yes" className="h-5 w-5 rounded accent-pink-600" />
            I&apos;d like to book a visit to the school
          </label>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" name="name" required autoComplete="name" />
          <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-base font-semibold text-navy-900">Subject</span>
            <select name="subject" required className="field" defaultValue="">
              <option value="" disabled>
                What is this about?
              </option>
              <option>Admissions enquiry</option>
              <option>Book a school visit</option>
              <option>Fees enquiry</option>
              <option>School bus / after-school care</option>
              <option>General enquiry</option>
            </select>
          </label>
          <TextArea label="Your message" name="message" required />
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-muted">
          <WhatsAppGlyph className="h-4 w-4 text-[#25D366]" />
          Your enquiry will be sent to us via WhatsApp.
        </p>
        <button type="submit" className="btn btn-pink">
          <Send className="h-4 w-4" aria-hidden /> {variant === "admission" ? "Send Enquiry" : "Send Message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-base font-semibold text-navy-900">{label}</span>
      <input className="field" {...props} />
    </label>
  );
}

function TextArea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block sm:col-span-2">
      <span className="mb-2 block text-base font-semibold text-navy-900">{label}</span>
      <textarea rows={4} className="field resize-y" {...props} />
    </label>
  );
}
