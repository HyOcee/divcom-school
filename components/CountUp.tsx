"use client";

import { useEffect, useRef } from "react";

/**
 * Counts the last number in `value` up from zero when it scrolls into view ("100%", "15+", "1:15").
 * The server HTML always holds the final value, so it reads correctly without JavaScript.
 */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(.*?)(\d+)(\D*)$/);
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, before, digits, after] = match;
    const target = Number(digits);
    let frame = 0;
    el.textContent = `${before}0${after}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${before}${Math.round(target * eased)}${after}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
