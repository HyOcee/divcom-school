import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Crest } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { SocialIcons, WhatsAppGlyph } from "@/components/SocialIcons";
import { nav, school, whatsappLink } from "@/lib/content";

const parentLinks = [
  { label: "Head Teacher's Welcome", href: "/about#welcome" },
  { label: "Our Staff", href: "/about#staff" },
  { label: "Facilities", href: "/about#facilities" },
  { label: "Subjects", href: "/academics#subjects" },
  { label: "After-School Care", href: "/academics#after-school" },
  { label: "School Calendar", href: "/news#calendar" },
  { label: "FAQs", href: "/admissions#faqs" },
];

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.mapQuery)}`;

function Column({ title, delay = 0, children }: { title: string; delay?: number; children: ReactNode }) {
  return (
    <Reveal delay={delay}>
      <h2 className="flex items-center gap-3 font-condensed text-xl tracking-[0.14em] text-white uppercase">
        <span className="h-0.5 w-6 bg-pink-400" aria-hidden />
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3 text-[1.15rem]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-block transition duration-200 hover:translate-x-1 hover:text-pink-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-blue-100/85">
      <div className="h-1.5 bg-linear-to-r from-pink-600 via-pink-400 to-blue-500" aria-hidden />

      {/* The campus sketch, drawn in light lines behind the crest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-8 -z-10 h-64 bg-[url(/images/sketches/sketch-campus.svg)] bg-size-[auto_100%] bg-bottom bg-no-repeat opacity-[0.1] invert sm:h-80"
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-20 h-80 w-160 -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />

      {/* Brand shapes, echoing the homepage hero */}
      <div aria-hidden className="pointer-events-none absolute top-1.5 left-0 hidden h-28 w-56 sm:block">
        <div className="absolute -top-12 -left-10 h-28 w-40 rounded-[2.5rem] bg-pink-500/90" />
        <div className="absolute top-0 left-24 h-16 w-24 bg-blue-200/80 [clip-path:polygon(0_0,100%_0,0_100%)]" />
      </div>

      {/* Crest, name and motto */}
      <Reveal variant="zoom" className="container-x relative pt-16 text-center sm:pt-20">
        <Link href="/" aria-label={`${school.name} — home`} className="inline-block">
          <Crest className="mx-auto h-28 w-28 drop-shadow-[0_10px_30px_rgba(232,80,138,0.25)] sm:h-36 sm:w-36" />
        </Link>
        <p className="mt-6 font-display text-4xl text-white text-balance sm:text-5xl">{school.name}</p>
        <p className="mt-3 font-condensed text-base tracking-[0.3em] text-pink-300 uppercase sm:text-lg">
          {school.motto}
        </p>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-blue-100/70">
          Nurturing happy, confident and curious learners in Ikorodu, Lagos since {school.founded} — from Nursery and
          Kindergarten through Basic 1 – 5.
        </p>
        <SocialIcons className="mt-7 justify-center" />
      </Reveal>

      {/* Links and contact */}
      <div className="container-x relative mt-14">
        <div className="grid gap-12 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <Column title="Visit Us">
            <address className="flex gap-3 leading-relaxed not-italic">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-pink-300" aria-hidden />
              <span>
                {school.address.line1}
                <br />
                {school.address.line2}
                <br />
                {school.address.city}
              </span>
            </address>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-base font-bold text-white underline decoration-pink-400 underline-offset-4 hover:text-pink-300"
            >
              Get directions <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </Column>

          <Column title="Contact" delay={100}>
            <ul className="space-y-4">
              <li>
                <a href={school.phoneHref} className="flex items-center gap-3 transition hover:text-pink-300">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4 text-pink-300" aria-hidden />
                  </span>
                  {school.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Hello DIVCOM, I'd like to make an enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-pink-300"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                    <WhatsAppGlyph className="h-4 w-4 text-pink-300" />
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
              {school.email && (
                <li>
                  <a href={`mailto:${school.email}`} className="flex items-center gap-3 transition hover:text-pink-300">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                      <Mail className="h-4 w-4 text-pink-300" aria-hidden />
                    </span>
                    {school.email}
                  </a>
                </li>
              )}
            </ul>
            <Link href="/admissions#apply" className="btn btn-pink mt-7">
              Start Your Application
            </Link>
          </Column>

          <Column title="Explore" delay={200}>
            <LinkList items={[{ label: "Home", href: "/" }, ...nav]} />
          </Column>

          <Column title="For Parents" delay={300}>
            <LinkList items={parentLinks} />
          </Column>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-navy-950/60">
        <div className="container-x flex flex-col items-center gap-4 py-6 text-center text-sm text-blue-100/55 sm:flex-row sm:justify-between sm:pr-20 sm:text-left">
          <p>
            &copy; {school.founded}&ndash;present {school.name}. All rights reserved.
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-3 font-semibold tracking-wide text-blue-100/80 uppercase hover:text-white"
          >
            Back to top
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white transition group-hover:-translate-y-1 group-hover:bg-pink-600">
              <ArrowUp className="h-4 w-4" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
