import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { SocialIcons, WhatsAppGlyph } from "@/components/SocialIcons";
import { photos, school, whatsappLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact DIVCOM Nursery & Primary School at ${school.address.line1}, ${school.address.line2}, Lagos. Call or WhatsApp ${school.phone}.`,
};

export default function ContactPage() {
  const cards = [
    {
      icon: MapPin,
      title: "Visit us",
      lines: [school.address.line1, school.address.line2, school.address.city],
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapQuery)}`,
      cta: "Get directions",
    },
    {
      icon: Phone,
      title: "Call us",
      lines: [school.phone, "Monday – Friday, during school hours"],
      href: school.phoneHref,
      cta: "Call now",
    },
    {
      icon: WhatsAppGlyph,
      title: "WhatsApp",
      lines: [school.phone, "Quick replies to all enquiries"],
      href: whatsappLink("Hello DIVCOM, I'd like to make an enquiry."),
      cta: "Start a chat",
    },
    school.email
      ? { icon: Mail, title: "Email us", lines: [school.email], href: `mailto:${school.email}`, cta: "Send an email" }
      : { icon: Clock, title: "Office hours", lines: ["Monday – Friday", "School office open during term time"], href: "", cta: "" },
  ];

  return (
    <>
      <PageHero
        href="/contact"
        crumb="Contact Us"
        title="We'd love to hear from you."
        intro="Whether you have a question about admissions, want to book a visit or simply want to say hello — our friendly team is here to help."
        photo={photos.visit}
      />

      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="flex h-full flex-col rounded-[2rem] bg-white p-7 ring-1 ring-navy-900/8">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    i % 2 ? "bg-pink-100 text-pink-600" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-3xl text-navy-900">{c.title}</h2>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
                  {c.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                {c.href && (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-arrow mt-5 text-base"
                  >
                    {c.cta}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 bg-gradient-to-b from-white to-blue-50 pb-24 sm:pb-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Send a Message"
              title="Book a visit or ask us anything."
              intro="Tours are available on school days. Let us know a convenient time and we'll do our best to accommodate you."
            />
            <Photo photo={photos.visit} tone="pink" className="mt-10 aspect-[16/11] rounded-[2rem]" />
            <div className="mt-8">
              <p className="text-base font-bold text-navy-900">Follow us</p>
              <div className="mt-3 [&_a]:bg-navy-900 [&_a:hover]:bg-pink-600">
                <SocialIcons />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <EnquiryForm variant="contact" />
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="h-[26rem] bg-blue-100 sm:h-[32rem]">
        <iframe
          title="Map showing DIVCOM Nursery & Primary School"
          src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
          className="h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
