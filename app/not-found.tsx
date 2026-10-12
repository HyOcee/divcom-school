import Link from "next/link";
import { Crest } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-36 pb-24 text-center">
      <Crest className="h-16 w-16" />
      <p className="eyebrow mt-8">Page not found</p>
      <h1 className="h-display mt-4 text-5xl sm:text-5xl">Oops! This page has gone out to play.</h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn btn-pink">
          Back to home
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact us
        </Link>
      </div>
    </section>
  );
}
