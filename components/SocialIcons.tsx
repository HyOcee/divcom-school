import { school } from "@/lib/content";

const icons = {
  facebook: (
    <path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.1L14 2c-3.3 0-4 2.4-4 4v2.5H8V12h2v10h4V12h2.7l.4-3.5H14Z" />
  ),
  instagram: (
    <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm6-7.9a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 7.1ZM21.1 8.2a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-3.8-1.5c-1.5-.1-6-.1-7.6 0a5.4 5.4 0 0 0-3.8 1.5A5.4 5.4 0 0 0 2.9 8.2c-.1 1.5-.1 6 0 7.6a5.4 5.4 0 0 0 1.5 3.8 5.4 5.4 0 0 0 3.8 1.5c1.5.1 6 .1 7.6 0a5.4 5.4 0 0 0 3.8-1.5 5.4 5.4 0 0 0 1.5-3.8c.1-1.6.1-6 0-7.6Zm-2 9.4a3.1 3.1 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3.1 3.1 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.4s-.1-4.2.4-5.4a3.1 3.1 0 0 1 1.7-1.7c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3.1 3.1 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.4s.1 4.2-.4 5.4Z" />
  ),
  tiktok: (
    <path d="M16.6 2h-3.4v13.3a2.9 2.9 0 1 1-2-2.8V9a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.3V6.5A4.5 4.5 0 0 1 16.6 2Z" />
  ),
};

const labels = { facebook: "Facebook", instagram: "Instagram", tiktok: "TikTok" };

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => (
        <li key={key}>
          <a
            href={school.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`DIVCOM on ${labels[key]}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-pink-500"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
              {icons[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1.1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.4 13.4 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.8a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6ZM20.4 3.6A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6Z" />
    </svg>
  );
}
