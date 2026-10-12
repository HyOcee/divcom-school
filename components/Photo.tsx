import Image from "next/image";
import { Camera } from "lucide-react";
import type { PhotoSlot } from "@/lib/content";

type Tone = "pink" | "blue" | "mix" | "navy";

const toneClasses: Record<Tone, string> = {
  pink: "from-pink-200 via-pink-100 to-blue-100 text-pink-600",
  blue: "from-blue-200 via-blue-100 to-pink-100 text-blue-600",
  mix: "from-pink-200 via-blue-100 to-blue-200 text-navy-700",
  navy: "from-navy-800 via-navy-900 to-navy-950 text-pink-300",
};

/**
 * Renders a photo when `photo.src` is set, otherwise a branded placeholder
 * describing the photo that belongs there. The parent decides the size.
 */
export function Photo({
  photo,
  tone = "mix",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  hideLabel = false,
}: {
  photo: PhotoSlot;
  tone?: Tone;
  className?: string;
  priority?: boolean;
  sizes?: string;
  hideLabel?: boolean;
}) {
  // Callers may position the photo absolutely (e.g. as a background); otherwise it's relative for `fill`.
  const position = /(^|\s)(absolute|fixed)(\s|$)/.test(className) ? "" : "relative";

  if (photo.src) {
    return (
      <div className={`${position} overflow-hidden ${className}`}>
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={photo.alt}
      className={`${position} overflow-hidden bg-gradient-to-br ${toneClasses[tone]} ${className}`}
    >
      <div className="dots absolute inset-0 opacity-[0.12]" />
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
      {!hideLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <Camera className="h-7 w-7 opacity-60" aria-hidden />
          <span className="max-w-[16rem] text-[0.9rem] font-semibold tracking-wide uppercase opacity-70">
            {photo.alt}
          </span>
        </div>
      )}
    </div>
  );
}
