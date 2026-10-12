import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <div className="divide-y divide-navy-900/10 border-y border-navy-900/10">
      {faqs.map((item) => (
        <details key={item.q} className="group py-2">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-xl font-semibold text-navy-900 transition hover:text-pink-600 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pink-50 text-pink-600 transition group-open:rotate-45 group-open:bg-pink-600 group-open:text-white">
              <Plus className="h-4 w-4" aria-hidden />
            </span>
          </summary>
          <p className="pr-14 pb-5 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
