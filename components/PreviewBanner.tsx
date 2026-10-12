/** Thin strip shown at the top of every page while PREVIEW_MODE is on (see lib/content.ts). */
export function PreviewBanner() {
  return (
    <div className="relative z-[45] flex h-(--preview-h) items-center justify-center gap-2 bg-pink-600 px-4 text-center text-sm font-semibold text-white">
      <span aria-hidden>🚧</span>
      <p className="truncate">
        <strong className="font-bold">Preview</strong>
        <span className="hidden sm:inline"> — this website is still being built and some content is sample text.</span>
        <span className="sm:hidden"> — site in progress</span>
      </p>
    </div>
  );
}
