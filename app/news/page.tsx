import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { calendar, latestNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Events",
  description: "The latest news, events and term dates from DIVCOM Nursery & Primary School, Ikorodu.",
};

export default function NewsPage() {
  const [featured, ...rest] = latestNews();

  return (
    <>
      <PageHero
        href="/news"
        crumb="News & Events"
        title="News, events and celebrations."
        intro="Stay up to date with school life, special events and the achievements of our wonderful pupils."
        photo={{ alt: "School event" }}
      />

      <section className="container-x py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <NewsCard item={featured} featured />
          </Reveal>
          {rest.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 100}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="calendar" className="scroll-mt-24 bg-blue-50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="School Calendar"
            title="Term dates & key events."
            intro="Plan ahead with our academic calendar. Dates may occasionally change — we'll always let parents know in good time."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {calendar.map((term, i) => (
              <Reveal key={term.term} delay={i * 120}>
                <div className="h-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-navy-900/5">
                  <div
                    className={`flex items-center gap-3 px-7 py-5 text-white ${
                      i === 1 ? "bg-pink-600" : i === 2 ? "bg-blue-600" : "bg-navy-900"
                    }`}
                  >
                    <CalendarDays className="h-5 w-5" aria-hidden />
                    <h3 className="font-display text-3xl">{term.term}</h3>
                  </div>
                  <ul className="divide-y divide-navy-900/8 px-7 py-3">
                    {term.items.map((item) => (
                      <li key={item.event} className="py-4">
                        <p className="text-sm font-bold tracking-wide text-pink-600 uppercase">{item.date}</p>
                        <p className="mt-1 font-semibold text-navy-900">{item.event}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
