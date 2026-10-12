"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(id);
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote className="h-12 w-12 text-pink-400" aria-hidden />
      <figure aria-live="polite" className="mt-6 min-h-[15rem] sm:min-h-[12rem]">
        <blockquote key={index} className="animate-[fade_0.6s_ease]">
          <p className="text-2xl leading-relaxed text-white italic sm:text-2xl lg:text-[1.9rem] lg:leading-snug">
            &ldquo;{t.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600 font-display text-2xl text-white">
            {t.name.replace(/^(Mrs?\.|Mr\. & Mrs\.)\s*/, "").charAt(0)}
          </span>
          <span>
            <span className="block font-bold text-white">{t.name}</span>
            <span className="block text-base text-blue-100/70">{t.detail}</span>
          </span>
        </figcaption>
      </figure>

      <div className="mt-10 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-navy-900"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-navy-900"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <div className="ml-2 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-pink-400" : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
