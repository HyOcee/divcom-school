import { WhatsAppGlyph } from "@/components/SocialIcons";
import { whatsappLink } from "@/lib/content";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello DIVCOM, I'd like to make an enquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DIVCOM on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 sm:right-7 sm:bottom-7"
    >
      <WhatsAppGlyph className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden text-base font-bold whitespace-nowrap transition-all duration-300 group-hover:max-w-40 group-hover:pr-1 sm:block">
        Chat with us
      </span>
    </a>
  );
}
