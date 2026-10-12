"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WhatsAppGlyph } from "@/components/SocialIcons";
import { nav, school, whatsappLink } from "@/lib/content";

/**
 * Site chrome (after scgssm.org): the logo sits in the top-left corner of every page, brand shapes in the
 * top-right, and a round menu button fixed to the top-right corner.
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      setPastHero(window.scrollY > (hero ? hero.offsetHeight - 80 : 160));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? isHome
      : pathname === href || pathname.startsWith(`${href}/`);

  // On the homepage, desktop has the menu down the hero's right-hand side, so the button waits until the hero is passed.
  const showButtonLg = !isHome || open || pastHero;

  return (
    <>
      {/* Reading progress */}
      <div
        aria-hidden
        className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[65] h-1 bg-linear-to-r from-pink-500 via-pink-400 to-blue-500"
      />
      <div className="pointer-events-none absolute inset-x-0 top-(--preview-h) z-40">
        <div
          className={`anim-drop pointer-events-auto relative z-10 inline-block py-3 pr-12 pl-4 sm:py-5 sm:pr-24 sm:pl-8 lg:pl-12 ${
            isHome
              ? "bg-white shadow-lg [clip-path:polygon(0_0,100%_0,calc(100%-2.5rem)_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,calc(100%-4rem)_100%,0_100%)]"
              : ""
          }`}
        >
          <Logo large />
        </div>

        {/* Brand shapes; the fixed menu button completes the group. */}
        <div
          aria-hidden
          className="anim-drop absolute top-0 right-0 h-20 w-36 [--d:150ms] sm:h-28 sm:w-72"
        >
          <div className="anim-float absolute -top-8 right-16 h-20 w-28 rounded-[1.75rem] bg-pink-500 sm:-top-10 sm:right-32 sm:h-28 sm:w-44 sm:rounded-[2.5rem]" />
          <div className="anim-float absolute top-0 right-6 h-14 w-20 bg-blue-200/90 [--d:-3.5s] [clip-path:polygon(0_0,100%_0,100%_100%)] sm:right-12 sm:h-20 sm:w-32" />
          {isHome && (
            <div className="absolute top-2 right-2 hidden h-20 w-20 rounded-full bg-blue-600 lg:block" />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`fixed top-[calc(var(--preview-h)+0.5rem)] right-2 z-[70] grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-lg shadow-navy-950/30 transition duration-300 hover:bg-pink-600 sm:h-20 sm:w-20 ${
          showButtonLg
            ? "lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
            : "lg:pointer-events-none lg:-translate-y-24 lg:opacity-0"
        }`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
      >
        {open ? (
          <X className="h-6 w-6 sm:h-8 sm:w-8" />
        ) : (
          <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
        )}
      </button>

      {/* Menu panel */}
      <div
        id="site-menu"
        className={`fixed inset-0 z-[60] ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-md flex-col bg-navy-900 text-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-20 w-36 sm:h-28 sm:w-56"
          >
            <div className="absolute -top-8 right-16 h-20 w-24 rounded-[1.75rem] bg-pink-500/90 sm:-top-10 sm:right-28 sm:h-28 sm:w-32" />
            <div className="absolute top-0 right-6 h-14 w-20 bg-blue-200/80 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:right-12 sm:h-20 sm:w-28" />
          </div>

          <nav
            aria-label="Main"
            className="flex-1 overflow-y-auto px-6 pt-24 pb-6 sm:px-8 sm:pt-32"
          >
            <ul>
              {[{ label: "Home", href: "/" }, ...nav].map((item, i) => {
                const children = "children" in item ? item.children : undefined;
                const isOpen = expanded === item.href;
                return (
                  // Items cascade in as the panel opens.
                  <li
                    key={item.href}
                    className={`border-b border-white/10 transition duration-500 ease-out ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: open ? `${150 + i * 50}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={`flex-1 py-3 font-display text-[1.95rem] tracking-wide transition hover:text-pink-300 ${
                          isActive(item.href) ? "text-pink-300" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                      {children && (
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : item.href)}
                          className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/10"
                          aria-expanded={isOpen}
                          aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} sections`}
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    {children && isOpen && (
                      <ul className="space-y-1 pb-4 pl-4">
                        {children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block py-1.5 text-[1.15rem] text-blue-100/80 transition hover:text-pink-300"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-white/10 p-6 sm:px-8">
            <Link
              href="/admissions#apply"
              onClick={() => setOpen(false)}
              className="btn btn-pink w-full"
            >
              Apply Now
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a href={school.phoneHref} className="btn btn-ghost-light px-3">
                <Phone className="h-4 w-4" /> Call us
              </a>
              <a
                href={whatsappLink(
                  "Hello DIVCOM, I'd like to make an enquiry.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light px-3"
              >
                <WhatsAppGlyph className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
