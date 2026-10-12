import type { Metadata } from "next";
import { Eye, Target } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { achievements, facilities, headTeacher, mission, photos, school, staff, values, vision } from "@/lib/content";
import { Sketch } from "@/components/Sketch";

export const metadata: Metadata = {
  title: "About Us",
  description: `Founded in ${school.founded}, DIVCOM Nursery & Primary School is a caring, high-achieving school in Ori-Okuta, Ikorodu, Lagos.`,
};

const timeline = [
  // PLACEHOLDER — replace with the school's real milestones
  { year: "2011", text: "DIVCOM opens its doors in Ori-Okuta, Ikorodu, with a small Nursery class and a big vision." },
  { year: "2014", text: "Primary section opens, welcoming our first Basic 1 pupils." },
  { year: "2017", text: "French and Music become part of the core curriculum for every class." },
  { year: "2019", text: "New ICT lab and library open; first Basic 5 cohort sits Common Entrance." },
  { year: "2023", text: "School bus service and after-school care introduced for working families." },
  { year: "Today", text: "A thriving community of pupils, parents and staff — and still growing." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        href="/about"
        crumb="About Us"
        title="A school built on love, learning and excellence."
        intro="For over a decade, DIVCOM has given children in Ikorodu a joyful, secure and ambitious start to their education."
        photo={photos.aboutHero}
      />

      {/* Story */}
      <section className="relative isolate container-x py-24 sm:py-32">
        <Sketch variant="campus" />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <SectionHeading eyebrow="Our Story" title="From one classroom to a community of learners." />
            <div className="mt-6 space-y-5 text-xl leading-relaxed text-muted">
              {/* PLACEHOLDER — replace with the school's real history */}
              <p>
                DIVCOM Nursery &amp; Primary School was founded in {school.founded} with a simple belief: that every
                child deserves an education that is both nurturing and excellent.
              </p>
              <p>
                What began as a small nursery in Ori-Okuta has grown into a full Nursery and Primary School, trusted
                by families across Ikorodu. Along the way our commitment has never changed — small classes, caring
                teachers and high expectations for every child.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <ol className="relative space-y-7 border-l-2 border-pink-200 pl-8">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute top-1 -left-[2.55rem] h-4 w-4 rounded-full border-4 border-white bg-pink-500 ring-2 ring-pink-200" />
                  <p className="font-display text-3xl text-navy-900">{t.year}</p>
                  <p className="mt-1 text-muted">{t.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Our Mission", text: mission, icon: Target, cls: "bg-navy-900 text-white", sub: "text-blue-100/85" },
              { title: "Our Vision", text: vision, icon: Eye, cls: "bg-pink-600 text-white", sub: "text-pink-50/90" },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className={`h-full rounded-[2rem] p-10 sm:p-12 ${m.cls}`}>
                  <m.icon className="h-9 w-9 opacity-80" aria-hidden />
                  <h2 className="mt-6 font-display text-4xl">{m.title}</h2>
                  <p className={`mt-4 text-xl leading-relaxed ${m.sub}`}>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-2xl text-navy-900 italic sm:text-2xl">
            Our motto: <span className="text-pink-600">&ldquo;{school.motto}&rdquo;</span>
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-7 ring-1 ring-navy-900/5">
                <Icon name={v.icon} className="h-7 w-7 text-pink-500" />
                <h3 className="mt-4 font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head teacher's welcome */}
      <section id="welcome" className="container-x scroll-mt-28 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal variant="left" className="lg:sticky lg:top-32 lg:self-start">
            <Photo photo={photos.headTeacher} tone="pink" className="aspect-[4/5] w-full rounded-[2.5rem]" />
            <div className="mt-6">
              <p className="font-display text-3xl text-navy-900">{headTeacher.name}</p>
              <p className="text-muted">{headTeacher.role}</p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <SectionHeading eyebrow="A Welcome from Our Head Teacher" title="“We would love to welcome your family.”" />
            <div className="mt-8 space-y-5 text-xl leading-relaxed text-muted">
              <p className="font-semibold text-navy-900">Dear Parents and Guardians,</p>
              {headTeacher.letter.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p className="pt-2">
                Warm regards,
                <br />
                <span className="text-2xl font-semibold text-navy-900 italic">{headTeacher.name}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="scroll-mt-28 bg-blue-50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Leadership & Staff"
            title="Caring, qualified and committed."
            intro="Our teachers are trained professionals who are passionate about early years and primary education — and about every child in their care."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 100}>
                <figure className="group overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy-900/5">
                  <div className="overflow-hidden">
                    <Photo
                      photo={p.photo}
                      tone={i % 2 ? "pink" : "blue"}
                      className="aspect-[4/3.6] transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="p-6">
                    <p className="font-display text-3xl text-navy-900">{p.name}</p>
                    <p className="mt-1 text-base font-semibold text-pink-600">{p.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="relative isolate container-x scroll-mt-28 py-24 sm:py-32">
        <Sketch variant="tree-right" />
        <SectionHeading
          eyebrow="Facilities"
          title="Everything a child needs to thrive."
          intro="Safety comes first at DIVCOM. Our campus is secure, clean and designed with young learners in mind."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div className="group h-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy-900/8">
                <Photo
                  photo={{ alt: f.title }}
                  tone={i % 2 ? "pink" : "blue"}
                  className="aspect-[4/3]"
                  hideLabel
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="relative p-6 pt-9">
                  <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-white text-pink-600 shadow-lg ring-1 ring-navy-900/5">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-28 bg-navy-900 py-24 text-white sm:py-32">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Achievements"
            title="Proud of every milestone."
            intro="Our pupils shine in the classroom, on the sports field and on the stage."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 transition hover:bg-white/10">
                  <p className="font-display text-5xl text-pink-300">{a.year}</p>
                  <h3 className="mt-4 text-xl font-bold">{a.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-blue-100/75">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
