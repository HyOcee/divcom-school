import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, Check, Clock, HeartHandshake, Lightbulb, Users } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { classLevels, coCurricular, photos, subjects } from "@/lib/content";
import { Sketch } from "@/components/Sketch";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Nursery, Kindergarten and Basic 1 – 5 at DIVCOM. A broad curriculum including English, Mathematics, Science, French, Music and ICT, plus clubs and after-school care.",
};

const approach = [
  { icon: Users, title: "Small classes", text: "Teachers know every child well and can tailor support and challenge." },
  { icon: Lightbulb, title: "Learning by doing", text: "Hands-on activities, play and discovery make lessons stick." },
  { icon: BookOpenCheck, title: "Strong foundations", text: "A rigorous focus on literacy, numeracy and reasoning from the start." },
  { icon: HeartHandshake, title: "Parent partnership", text: "Regular reports, open days and quick communication with families." },
];

const afterSchool = [
  "Supervised homework and reading time",
  "Healthy snack break",
  "Arts, crafts, games and outdoor play",
  "Caring, familiar staff in a safe environment",
  "Flexible for working parents",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        href="/academics"
        crumb="Academics"
        title="Curious minds. Confident learners."
        intro="A rich, balanced curriculum that builds strong academic foundations while nurturing creativity, character and a lifelong love of learning."
        photo={photos.academicsHero}
      />

      {/* Approach */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Rigorous academics, taught with warmth."
              intro="We follow the Nigerian national curriculum and enrich it with French, Music, ICT, phonics and reasoning — preparing pupils superbly for Common Entrance and for life."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="h-full rounded-3xl bg-cream p-7">
                  <a.icon className={`h-7 w-7 ${i % 2 ? "text-blue-600" : "text-pink-600"}`} aria-hidden />
                  <h3 className="mt-4 font-bold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="scroll-mt-28 bg-blue-50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Class Levels" title="The right start at every stage." />
          <div className="mt-16 space-y-8">
            {classLevels.map((level, i) => (
              <Reveal key={level.name}>
                <article className="grid overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-navy-900/5 lg:grid-cols-2">
                  <Photo
                    photo={{ alt: `${level.name} classroom` }}
                    tone={level.tone}
                    className={`min-h-72 ${i % 2 ? "lg:order-2" : ""}`}
                  />
                  <div className="p-8 sm:p-12">
                    <p className="text-sm font-bold tracking-[0.2em] text-pink-600 uppercase">
                      {level.stage} · {level.ages}
                    </p>
                    <h3 className="h-display mt-3 text-5xl">{level.name}</h3>
                    <p className="mt-4 text-xl leading-relaxed text-muted">{level.text}</p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {level.classes.map((c) => (
                        <li key={c} className="rounded-full bg-blue-50 px-4 py-2 text-base font-bold text-navy-800">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="relative isolate container-x scroll-mt-28 py-24 sm:py-32">
        <Sketch variant="doodles" />
        <SectionHeading
          eyebrow="Subjects"
          title="A broad and balanced curriculum."
          intro="Every subject is taught by caring, qualified teachers, with specialist teaching in French, Music and ICT."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((s, i) => {
            const highlight = s.name === "French" || s.name === "Music";
            return (
              <Reveal as="li" key={s.name} delay={(i % 4) * 60}>
                <div
                  className={`flex h-full items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 ${
                    highlight ? "bg-pink-600 text-white shadow-lg shadow-pink-600/20" : "bg-white ring-1 ring-navy-900/8 hover:shadow-md"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      highlight ? "bg-white/20" : i % 2 ? "bg-pink-50 text-pink-600" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className={`font-semibold ${highlight ? "" : "text-navy-900"}`}>{s.name}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Spotlight */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          {[
            {
              eyebrow: "Spotlight: French",
              title: "A second language, naturally.",
              text: "French begins in our Early Years with songs, rhymes and play, growing into reading, writing and simple conversation by Basic 5. Pupils celebrate La Journée Française each year with food, music and performances.",
              photo: photos.french,
              tone: "blue" as const,
            },
            {
              eyebrow: "Spotlight: Music",
              title: "Finding their voice.",
              text: "Every pupil sings, plays and performs. Lessons cover rhythm, notation, keyboard, recorder and percussion, and our choir performs at carol services, graduations and inter-school events.",
              photo: photos.music,
              tone: "pink" as const,
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <Photo photo={s.photo} tone={s.tone} className="aspect-[16/11] rounded-[2rem]" />
              <p className="eyebrow mt-8">{s.eyebrow}</p>
              <h3 className="h-display mt-3 text-4xl sm:text-5xl">{s.title}</h3>
              <p className="mt-4 text-xl leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clubs */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Beyond the Classroom"
              title="Clubs and activities to spark every talent."
              intro="Co-curricular activities help children discover new passions, make friends and grow in confidence."
            />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <ul className="flex flex-wrap gap-3">
              {coCurricular.map((c, i) => (
                <li
                  key={c}
                  className={`rounded-full px-5 py-3 text-base font-bold ${
                    i % 3 === 0
                      ? "bg-pink-100 text-pink-700"
                      : i % 3 === 1
                        ? "bg-blue-100 text-navy-800"
                        : "bg-navy-900 text-white"
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* After-school care */}
      <section id="after-school" className="container-x scroll-mt-28 pb-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-navy-900 text-white lg:grid-cols-2">
            <div className="p-8 sm:p-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-pink-200">
                <Clock className="h-4 w-4" aria-hidden /> For busy families
              </span>
              <h2 className="mt-6 font-display text-5xl">After-School Care</h2>
              <p className="mt-4 text-xl leading-relaxed text-blue-100/85">
                Our supervised after-school programme gives working parents peace of mind, and gives children a
                relaxed, productive end to their day.
              </p>
              <ul className="mt-8 space-y-3">
                {afterSchool.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-500">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-pink mt-10">
                Ask about after-school care <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <Photo photo={photos.afterSchool} tone="navy" className="min-h-80" />
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
