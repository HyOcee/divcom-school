"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Photo } from "@/components/Photo";
import { gallery, galleryCategories } from "@/lib/content";

const tones = ["pink", "blue", "mix"] as const;
// Every 8 tiles fill a 4-column × 3-row block exactly.
const spans = ["sm:row-span-2", "", "", "sm:col-span-2", "", "sm:row-span-2", "", "sm:col-span-2"];

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter).slice(0, limit);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      {!limit && (
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter photos">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-5 py-2.5 text-base font-bold transition ${
                filter === c ? "bg-navy-900 text-white" : "bg-blue-50 text-navy-800 hover:bg-pink-100 hover:text-pink-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-flow-row-dense auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={`${item.photo.alt}-${i}`} className={filter === "All" ? spans[i % spans.length] : ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              aria-label={`View photo: ${item.photo.alt}`}
            >
              <Photo
                photo={item.photo}
                tone={tones[i % tones.length]}
                className="h-full w-full transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy-950/80 to-transparent p-4 text-left text-sm font-bold tracking-wider text-white uppercase opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && items[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Photo
              photo={items[active].photo}
              tone={tones[active % tones.length]}
              className="aspect-[4/3] w-full rounded-2xl"
              sizes="(min-width: 1024px) 896px, 100vw"
            />
            <figcaption className="mt-4 text-center text-base text-blue-100">
              {items[active].photo.alt} · {active + 1} / {items.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
