// Positions are relative to a full-screen-width box that clips its contents, so the artwork can bleed
// off the screen edges without ever making the page wider (which on phones pushes fixed elements off-screen).
const placement = {
  // Full-width campus drawing behind the top of a section.
  campus: "inset-x-0 top-6 h-64 bg-size-[auto_100%] bg-top sm:h-80 lg:h-[26rem]",
  // Classroom doodles around the edges of a section; faded out in the middle so text stays clear.
  doodles:
    "inset-x-0 inset-y-8 bg-size-[100%_auto] bg-center [mask-image:radial-gradient(ellipse_38%_55%_at_center,transparent_55%,black_95%)]",
  // A tree at the section edge that fades out towards the content.
  "tree-left":
    "top-10 -left-40 h-[38rem] w-[37rem] bg-contain bg-left-top opacity-35 [mask-image:linear-gradient(to_right,black_45%,transparent)] sm:-left-24 xl:left-0",
  "tree-right":
    "-right-40 bottom-6 h-[38rem] w-[37rem] bg-contain bg-right-bottom opacity-35 [mask-image:linear-gradient(to_left,black_45%,transparent)] sm:-right-24 xl:right-0",
};

const art = { campus: "campus", doodles: "doodles", "tree-left": "tree", "tree-right": "tree" } as const;

/** Faint pencil-sketch artwork behind a section. Decorative; the parent needs `relative isolate`. */
export function Sketch({ variant, className = "" }: { variant: keyof typeof placement; className?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
    >
      <div
        className={`sketch-drift absolute bg-no-repeat ${variant.startsWith("tree") ? "" : "opacity-25"} ${placement[variant]} ${className}`}
        style={{ backgroundImage: `url(/images/sketches/sketch-${art[variant]}.svg)` }}
      />
    </div>
  );
}
