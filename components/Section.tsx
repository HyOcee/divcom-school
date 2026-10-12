import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";
import { navSections, type PhotoSlot } from "@/lib/content";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-pink-300" : ""}`}>{eyebrow}</p>
      <h2
        className={`h-display mt-4 text-4xl leading-[1.02] text-balance sm:text-5xl lg:text-[4rem] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-xl leading-relaxed ${light ? "text-blue-100/85" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

/** Row of brand shapes along the bottom of the page header on small screens (after scgssm.org). */
function ShapeBand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 44" preserveAspectRatio="xMidYMax slice" className={`h-11 w-full ${className}`} aria-hidden>
      <path d="M0 44 34 8l34 36Z" className="fill-pink-500" />
      <path d="M112 10l34 34H78Z" className="fill-blue-600" />
      <path d="m166 26 9 9-9 9-9-9Z" className="fill-blue-200" />
      <path d="M196 44l26-26 26 26" fill="none" strokeWidth="9" className="stroke-navy-900" />
      <rect x="262" y="20" width="44" height="40" rx="12" className="fill-pink-300" />
      <path d="M316 44l42-34 42 34Z" className="fill-blue-200" />
    </svg>
  );
}

export function PageHero({
  crumb,
  title,
  intro,
  photo,
  href,
}: {
  /** The page name: used for the breadcrumb and the big heading. */
  crumb: string;
  /** A short tagline under the heading. */
  title: ReactNode;
  intro: ReactNode;
  photo: PhotoSlot;
  /** The page's nav href; its sections are listed under "On this page". */
  href?: string;
}) {
  const sections = href ? navSections(href) : [];
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-linear-to-b from-white via-white to-blue-50 pt-28 sm:pt-36 lg:pb-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="text-center lg:text-left">
          <nav aria-label="Breadcrumb" className="anim-rise text-sm font-bold tracking-[0.12em] text-navy-800 uppercase">
            <ol className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              <li>
                <Link href="/" className="underline underline-offset-4 hover:text-pink-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="underline decoration-pink-400 underline-offset-4">
                {crumb}
              </li>
            </ol>
          </nav>
          <h1 className="mt-5 font-display text-6xl leading-[0.9] tracking-wide text-navy-900 sm:text-7xl lg:text-[7.5rem]">
            <span className="line-mask">
              <span className="anim-line [--d:150ms]">{crumb}</span>
            </span>
          </h1>
          <p className="anim-rise mt-5 text-2xl font-semibold text-pink-600 italic [--d:350ms]">{title}</p>
          <p className="anim-rise mx-auto mt-4 max-w-xl [--d:450ms] text-xl leading-relaxed text-muted lg:mx-0">{intro}</p>

          {sections.length > 0 && (
            <nav aria-label="On this page" className="anim-rise mt-10 [--d:600ms] hidden max-w-md lg:block">
              <p className="eyebrow">On this page</p>
              <ul className="mt-4 border-t border-navy-900/10">
                {sections.map((s) => (
                  <li key={s.href} className="border-b border-navy-900/10">
                    <Link
                      href={s.href}
                      className="group flex items-center justify-between py-3 font-semibold text-navy-900 transition hover:text-pink-600"
                    >
                      {s.label}
                      <ChevronRight className="h-4 w-4 text-pink-500 transition group-hover:translate-x-1" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="relative hidden lg:block">
          <div aria-hidden className="anim-rise absolute -right-6 -bottom-6 h-3/5 w-3/5 rounded-[2rem] bg-pink-500 [--d:650ms]" />
          <div aria-hidden className="anim-drop absolute -top-6 -left-6 h-28 w-36 bg-blue-200 [--d:750ms] [clip-path:polygon(0_0,100%_0,0_100%)]" />
          <Photo
            photo={photo}
            tone="mix"
            priority
            className="anim-wipe aspect-[16/11] w-full shadow-2xl shadow-navy-900/20 [--d:250ms]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
      <ShapeBand className="anim-rise mt-12 [--d:550ms] lg:hidden" />
    </section>
  );
}
