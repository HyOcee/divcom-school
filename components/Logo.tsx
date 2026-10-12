import Image from "next/image";
import Link from "next/link";

/** The official school crest (public/images/logo/divcom-crest.svg). Decorative: callers label the context. */
export function Crest({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <Image src="/images/logo/divcom-crest.svg" alt="" width={400} height={426} className={`object-contain ${className}`} />
  );
}

export function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="DIVCOM Nursery & Primary School — home">
      <Crest
        className={`shrink-0 transition-transform duration-300 group-hover:-rotate-6 ${
          large ? "h-12 w-12 sm:h-18 sm:w-18" : "h-11 w-11 sm:h-12 sm:w-12"
        }`}
      />
      <span className="leading-none">
        <span
          className={`block font-display tracking-wide ${large ? "text-[1.9rem] sm:text-[2.9rem]" : "text-[1.9rem] sm:text-3xl"} ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          DIVCOM
        </span>
        <span
          className={`mt-1 block font-bold tracking-[0.18em] uppercase ${large ? "text-[0.8rem] sm:text-[0.95rem]" : "text-[0.85rem]"} ${
            light ? "text-pink-200" : "text-pink-600"
          }`}
        >
          Nursery &amp; Primary School
        </span>
      </span>
    </Link>
  );
}
