"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Fades content in as it scrolls into view: rising (default), sliding in from a side, or zooming. */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      data-reveal={variant}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
