import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Languages,
  Music,
  Play,
  Star,
} from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icon";
import { NewsCard } from "@/components/NewsCard";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Section";
import { Testimonials } from "@/components/Testimonials";
import {
  achievements,
  SHOW_ACHIEVEMENTS,
  classLevels,
  facilities,
  headTeacher,
  latestNews,
  nav,
  photos,
  school,
  stats,
  values,
} from "@/lib/content";
import { yearsOfService } from "@/lib/years";
import { Sketch } from "@/components/Sketch";

const marquee = [
  "Nursery",
  "Kindergarten",
  "Basic 1 – 5",
  "French",
  "Music",
  "ICT & Coding",
  "After-School Care",
  "Common Entrance Success",
  "Since 2011",
];

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElementarySchool",
  name: school.name,
  foundingDate: String(school.founded),
  telephone: school.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: school.address.line1,
    addressLocality: "Ikorodu",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
};

export default async function Home() {
  const years = await yearsOfService();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schoolJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section
        id="hero"
        className="relative isolate flex min-h-[34rem] flex-col justify-end overflow-hidden bg-navy-950 sm:min-h-[42rem] lg:h-[100svh] lg:max-h-[62rem] lg:min-h-[44rem]"
      >
        <Photo
          photo={photos.hero}
          tone="navy"
          priority
          hideLabel
          className="anim-kenburns absolute inset-0 -z-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/25" />

        {/* Desktop menu, stacked down the right-hand side */}
        <nav
          aria-label="Primary"
          className="absolute top-1/2 right-0 hidden -translate-y-1/2 lg:block"
        >
          <ul className="flex flex-col items-end bg-gradient-to-l from-navy-950/75 via-navy-950/45 to-transparent py-16 pl-28 [mask-image:linear-gradient(to_bottom,transparent,black_4rem,black_calc(100%-4rem),transparent)]">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="anim-right"
                style={{ "--d": `${300 + i * 70}ms` } as CSSProperties}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 py-2.5 font-condensed text-[1.9rem] tracking-wide text-white uppercase transition hover:text-pink-200"
                >
                  <span className="font-sans text-sm font-bold tracking-widest text-pink-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  <span className="h-0.5 w-8 bg-white/40 transition-all duration-300 group-hover:w-16 group-hover:bg-pink-400" />
                </Link>
              </li>
            ))}
            <li className="anim-right mt-6 pr-12 [--d:800ms]">
              <Link href="/admissions#apply" className="btn btn-pink px-7">
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Headline panel */}
        <div className="anim-left w-full bg-navy-900/80 px-5 pt-8 pb-9 backdrop-blur-[2px] sm:w-[85%] sm:px-10 sm:pt-10 sm:pb-12 lg:w-[54%] lg:px-16 lg:pt-14 lg:pb-16">
          <p className="anim-rise text-[0.95rem] font-bold tracking-[0.22em] text-pink-300 uppercase [--d:350ms] sm:text-sm">
            Admissions open · 2026/2027 session
          </p>
          <h1 className="mt-3 font-condensed text-5xl leading-[0.95] text-white uppercase sm:text-7xl xl:text-[7.25rem]">
            <span className="line-mask">
              <span className="anim-line [--d:450ms]">Little minds.</span>
            </span>
            <span className="line-mask">
              <span className="anim-line [--d:600ms]">Bright futures.</span>
            </span>
          </h1>
          <div className="anim-rise mt-7 flex flex-wrap gap-x-8 gap-y-3 font-bold text-white [--d:850ms]">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 underline underline-offset-4 hover:text-pink-200"
            >
              Discover DIVCOM
              <Play
                className="h-3 w-3 fill-current transition group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="/admissions#apply"
              className="group inline-flex items-center gap-2 text-pink-200 underline underline-offset-4 hover:text-white"
            >
              Apply for admission
              <Play
                className="h-3 w-3 fill-current transition group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-navy-900 py-5 text-white" aria-hidden>
        <div className="animate-marquee flex w-max gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-3xl tracking-wider whitespace-nowrap"
            >
              {m}
              <Star className="h-4 w-4 fill-pink-400 text-pink-400" />
            </span>
          ))}
        </div>
      </div>

      {/* Welcome */}
      <section className="relative isolate container-x py-24 sm:py-32">
        <Sketch variant="tree-right" />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left" className="relative">
            <Photo
              photo={photos.headTeacher}
              tone="blue"
              className="aspect-[4/5] w-full max-w-md rounded-[2.5rem] sm:max-w-lg"
            />
            <div className="absolute -right-2 -bottom-8 max-w-[15rem] rounded-3xl bg-pink-600 p-6 text-white shadow-2xl sm:right-6 lg:-right-6">
              <p className="font-display text-5xl leading-none">
                {school.founded}
              </p>
              <p className="mt-2 text-base text-pink-100">
                Proudly serving families in Ikorodu for over a decade.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <SectionHeading
              eyebrow="Welcome to DIVCOM"
              title="Every child known, loved and inspired to shine."
            />
            <blockquote className="mt-8 border-l-4 border-pink-400 pl-6 text-2xl leading-relaxed text-navy-800 italic">
              &ldquo;{headTeacher.shortQuote}&rdquo;
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted">
              {headTeacher.letter[1]}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-bold text-navy-900">{headTeacher.name}</p>
                <p className="text-base text-muted">{headTeacher.role}</p>
              </div>
            </div>
            <Link href="/about#welcome" className="link-arrow mt-8">
              Read the Head Teacher&apos;s welcome{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50">
        <div className="container-x grid grid-cols-2 gap-y-12 py-16 lg:grid-cols-4 lg:py-20">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="px-4 text-center lg:border-l lg:border-navy-900/10 lg:first:border-0"
            >
              <p className="bg-gradient-to-br from-navy-800 to-pink-600 bg-clip-text font-display text-5xl text-transparent sm:text-6xl">
                <CountUp value={s.value.replace("{years}", String(years))} />
              </p>
              <p className="mx-auto mt-3 max-w-[12rem] text-base font-semibold text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pathways */}
      <section className="relative isolate container-x py-24 sm:py-32">
        <Sketch variant="doodles" />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Learning at DIVCOM"
            title="A seamless journey from first steps to secondary school."
            intro="Three stages, one caring community — each designed around how children learn best at every age."
          />
          <Link href="/academics" className="link-arrow shrink-0">
            Explore academics <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {classLevels.map((level, i) => (
            <Reveal key={level.name} delay={i * 120}>
              <Link
                href="/academics#levels"
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy-900/8 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10"
              >
                <div className="relative overflow-hidden">
                  <Photo
                    photo={{ alt: `${level.name} pupils learning` }}
                    tone={level.tone}
                    className="aspect-[4/3] transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-navy-900">
                    {level.ages}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-bold tracking-[0.2em] text-pink-600 uppercase">
                    {level.stage}
                  </p>
                  <h3 className="h-display mt-2 text-4xl">{level.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {level.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-base font-bold text-navy-800 group-hover:text-pink-600">
                    Learn more{" "}
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-pink-100 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            align="center"
            eyebrow="The DIVCOM Difference"
            title="Strong foundations, good character, joyful learning."
            intro="We believe a great primary education shapes the head, the heart and the hands."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-navy-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-2xl transition duration-300 group-hover:rotate-6 ${
                      i % 2
                        ? "bg-blue-100 text-blue-600"
                        : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="h-display mt-6 text-3xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* French & Music */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              icon: Languages,
              eyebrow: "Bonjour, les enfants!",
              title: "French from the very first years",
              text: "Children learn French through songs, games and conversation, building an ear for a second international language while they're young enough to absorb it naturally.",
              photo: photos.french,
              tone: "blue" as const,
            },
            {
              icon: Music,
              eyebrow: "Every child a musician",
              title: "Music that builds confidence",
              text: "From singing and percussion to keyboard and recorder, music lessons develop memory, teamwork and the confidence to perform — on stage at our concerts and beyond.",
              photo: photos.music,
              tone: "pink" as const,
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 150}>
              <article className="group relative isolate flex h-full min-h-[32rem] flex-col justify-end overflow-hidden rounded-[2.5rem] p-8 text-white sm:p-10">
                <Photo
                  photo={f.photo}
                  tone={f.tone}
                  className="absolute inset-0 -z-20 transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  hideLabel
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 text-pink-200 italic">{f.eyebrow}</p>
                <h3 className="mt-2 font-display text-5xl sm:text-5xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-blue-50/90">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-blue-50 py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Facilities"
              title="A safe, happy place to learn and grow."
              intro="Thoughtfully designed spaces that keep children secure, stimulated and inspired."
            />
            <Link href="/about#facilities" className="link-arrow shrink-0">
              See all facilities <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-navy-900/5 transition hover:shadow-lg">
                  <Icon
                    name={f.icon}
                    className={`h-8 w-8 ${i % 2 ? "text-pink-500" : "text-blue-600"}`}
                  />
                  <h3 className="mt-5 font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + achievements (achievements hidden for now — TODO: SHOW_ACHIEVEMENTS in lib/content.ts) */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-pink-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-600/30 blur-3xl" />
        <div
          className={`container-x grid gap-16 lg:gap-24 ${SHOW_ACHIEVEMENTS ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}
        >
          <div>
            <p className="eyebrow text-pink-300">What Parents Say</p>
            <div className="mt-8">
              <Testimonials />
            </div>
          </div>
          {SHOW_ACHIEVEMENTS && (
            <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur sm:p-10">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-pink-300" aria-hidden />
                <h2 className="font-display text-4xl tracking-wide">
                  Recent Achievements
                </h2>
              </div>
              <ul className="mt-8 space-y-6">
                {achievements.slice(0, 4).map((a) => (
                  <li key={a.title} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 self-start rounded-full bg-pink-500/20 px-2.5 py-1 text-sm font-bold text-pink-200">
                      {a.year}
                    </span>
                    <div>
                      <p className="font-bold">{a.title}</p>
                      <p className="mt-1 text-base text-blue-100/70">
                        {a.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/about#achievements"
                className="mt-8 inline-flex items-center gap-2 text-base font-bold text-pink-200 hover:text-white"
              >
                All achievements <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* News */}
      <section className="relative isolate container-x py-24 sm:py-32">
        <Sketch variant="campus" />
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="News & Events" title="Life at DIVCOM." />
          <Link href="/news" className="link-arrow shrink-0">
            All news &amp; events <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews()
            .slice(0, 3)
            .map((item, i) => (
              <Reveal key={item.slug} delay={i * 120}>
                <NewsCard item={item} />
              </Reveal>
            ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Gallery"
              title="Moments that make us smile."
            />
            <Link href="/gallery" className="link-arrow shrink-0">
              View the gallery <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-14">
            <GalleryGrid limit={8} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
