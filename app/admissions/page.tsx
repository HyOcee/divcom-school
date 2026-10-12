import type { Metadata } from "next";
import { CalendarCheck, FileText, Phone, Wallet } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Section";
import { WhatsAppGlyph } from "@/components/SocialIcons";
import { admissionSteps, ageGuide, photos, requiredDocuments, school, whatsappLink } from "@/lib/content";
import { Sketch } from "@/components/Sketch";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to DIVCOM Nursery & Primary School, Ikorodu. Admission process, age guide, required documents, FAQs and online enquiry form.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        href="/admissions"
        crumb="Admissions"
        title="Your child's journey starts here."
        intro="We welcome applications throughout the year for Nursery, Kindergarten and Basic 1 – 5. Our friendly admissions team will guide you every step of the way."
        photo={photos.admissionsHero}
      />

      {/* Steps */}
      <section className="relative isolate container-x py-24 sm:py-32">
        <Sketch variant="doodles" />
        <SectionHeading
          align="center"
          eyebrow="How to Apply"
          title="A simple, friendly admissions process."
          intro="Five easy steps from your first enquiry to your child's first day."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-5">
          {admissionSteps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="relative">
              {i < admissionSteps.length - 1 && (
                <span className="absolute top-8 left-[calc(50%+2.5rem)] hidden h-0.5 w-[calc(100%-5rem+1.5rem)] bg-gradient-to-r from-pink-300 to-blue-200 md:block" />
              )}
              <div className="text-center">
                <span
                  className={`mx-auto grid h-16 w-16 place-items-center rounded-full font-display text-3xl text-white shadow-lg ${
                    i % 2 ? "bg-blue-600 shadow-blue-600/25" : "bg-pink-600 shadow-pink-600/25"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-3xl text-navy-900">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Age guide, documents, fees */}
      <section className="bg-blue-50 py-24 sm:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-white p-8 ring-1 ring-navy-900/5 sm:p-10">
              <CalendarCheck className="h-8 w-8 text-pink-600" aria-hidden />
              <h2 className="h-display mt-5 text-3xl">Age Guide</h2>
              <table className="mt-6 w-full text-base">
                <tbody className="divide-y divide-navy-900/8">
                  {ageGuide.map((a) => (
                    <tr key={a.level}>
                      <th scope="row" className="py-3 pr-4 text-left font-bold text-navy-900">
                        {a.level}
                      </th>
                      <td className="py-3 text-right text-muted">{a.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-[2rem] bg-white p-8 ring-1 ring-navy-900/5 sm:p-10">
              <FileText className="h-8 w-8 text-blue-600" aria-hidden />
              <h2 className="h-display mt-5 text-3xl">Documents Required</h2>
              <ul className="mt-6 space-y-3 text-base text-muted">
                {requiredDocuments.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-pink-500/30 blur-3xl" />
              <Wallet className="h-8 w-8 text-pink-300" aria-hidden />
              <h2 className="mt-5 font-display text-3xl">School Fees</h2>
              <p className="mt-4 leading-relaxed text-blue-100/85">
                For information on school fees and what&apos;s included, please contact us. We&apos;re always happy to
                talk you through everything and answer any questions.
              </p>
              <div className="relative mt-8 space-y-3">
                <a href={school.phoneHref} className="btn btn-pink w-full">
                  <Phone className="h-4 w-4" aria-hidden /> Call {school.phone}
                </a>
                <a
                  href={whatsappLink("Hello DIVCOM, I'd like to enquire about school fees.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-light w-full"
                >
                  <WhatsAppGlyph className="h-4 w-4" /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="scroll-mt-24 bg-gradient-to-b from-white to-pink-50 py-24 sm:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Admission Enquiry"
              title="Start your application today."
              intro="Fill in the form and our admissions team will contact you to arrange a visit and share the next steps."
            />
            <div className="mt-10 rounded-3xl bg-white p-7 ring-1 ring-navy-900/5">
              <p className="font-bold text-navy-900">Prefer to talk?</p>
              <p className="mt-1 text-base text-muted">Call or WhatsApp our admissions team on</p>
              <a href={school.phoneHref} className="mt-3 block font-display text-3xl text-pink-600">
                {school.phone}
              </a>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <EnquiryForm variant="admission" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="relative isolate container-x scroll-mt-28 py-24 sm:py-32">
        <Sketch variant="tree-right" />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions parents often ask."
            intro="Can't find what you're looking for? Get in touch — we're happy to help."
          />
          <Faq />
        </div>
      </section>
    </>
  );
}
