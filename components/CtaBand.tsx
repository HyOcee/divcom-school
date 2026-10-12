import Link from "next/link";
import { Phone } from "lucide-react";
import { Crest } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { school } from "@/lib/content";

export function CtaBand({
  title = "Come and see DIVCOM for yourself.",
  text = "The best way to know if DIVCOM is right for your child is to visit. Meet our teachers, see our classrooms and feel the warmth of our community.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-pink-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 -z-10 h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="dots pointer-events-none absolute inset-0 -z-10 text-white opacity-[0.06]" />
          <Crest className="mx-auto h-14 w-14" />
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-blue-100/85">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact#visit" className="btn btn-pink">
              Book a Visit
            </Link>
            <Link href="/admissions#apply" className="btn btn-ghost-light">
              Apply for Admission
            </Link>
          </div>
          <a
            href={school.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-blue-100/80 hover:text-white"
          >
            <Phone className="h-4 w-4 text-pink-300" aria-hidden /> Or call us on {school.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
