import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/Photo";
import type { NewsItem } from "@/lib/content";

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const tones = { News: "blue", Event: "pink", Achievement: "mix" } as const;

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy-900/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10">
      <div className={`relative overflow-hidden ${featured ? "min-h-72 flex-1" : ""}`}>
        <Photo
          photo={item.photo}
          tone={tones[item.category]}
          className={`${featured ? "absolute inset-0" : "aspect-[4/3]"} transition duration-700 group-hover:scale-105`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[0.95rem] font-bold tracking-wider text-pink-600 uppercase shadow-sm">
          {item.category}
        </span>
      </div>
      <div className={`flex flex-col p-6 sm:p-7 ${featured ? "" : "flex-1"}`}>
        <time dateTime={item.date} className="text-sm font-semibold tracking-wide text-muted uppercase">
          {formatDate(item.date)}
        </time>
        <h3 className={`h-display mt-3 leading-snug ${featured ? "text-2xl sm:text-3xl" : "text-2xl"}`}>
          <Link href={`/news/${item.slug}`} className="after:absolute after:inset-0">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{item.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-base font-bold text-navy-800 transition group-hover:text-pink-600">
          Read more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </article>
  );
}
