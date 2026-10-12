import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatDate, NewsCard } from "@/components/NewsCard";
import { Photo } from "@/components/Photo";
import { latestNews, news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return item ? { title: item.title, description: item.excerpt } : {};
}

// Reading `params` happens inside <Suspense> so the page shell can render instantly on navigation.
export default function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      <NewsArticle params={props.params} />
    </Suspense>
  );
}

function ArticleSkeleton() {
  return (
    <div aria-busy="true" className="bg-gradient-to-b from-pink-50 to-white">
      <div className="container-x max-w-4xl animate-pulse pt-32 pb-24 sm:pt-40">
        <div className="h-5 w-48 rounded-full bg-navy-900/10" />
        <div className="mt-10 h-14 w-3/4 rounded-xl bg-navy-900/10" />
        <div className="mt-6 h-6 w-full rounded-full bg-navy-900/10" />
        <div className="mt-3 h-6 w-2/3 rounded-full bg-navy-900/10" />
      </div>
    </div>
  );
}

async function NewsArticle({ params }: { params: PageProps<"/news/[slug]">["params"] }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const more = latestNews()
    .filter((n) => n.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-gradient-to-b from-pink-50 to-white">
          <div className="container-x max-w-4xl pt-32 pb-10 sm:pt-40">
            <Link href="/news" className="inline-flex items-center gap-2 text-base font-bold text-navy-800 hover:text-pink-600">
              <ArrowLeft className="h-4 w-4" aria-hidden /> All news &amp; events
            </Link>
            <p className="mt-8 flex items-center gap-3 text-sm font-bold tracking-wider uppercase">
              <span className="rounded-full bg-pink-600 px-3 py-1 text-white">{item.category}</span>
              <time dateTime={item.date} className="text-muted">
                {formatDate(item.date)}
              </time>
            </p>
            <h1 className="h-display mt-6 text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">{item.title}</h1>
            <p className="mt-6 text-2xl leading-relaxed text-muted">{item.excerpt}</p>
          </div>
        </header>
        <div className="container-x max-w-5xl">
          <Photo photo={item.photo} tone="mix" priority className="aspect-[16/9] rounded-[2rem]" sizes="(min-width: 1024px) 1024px, 100vw" />
        </div>
        <div className="container-x max-w-3xl py-14 sm:py-20">
          <div className="space-y-6 text-xl leading-relaxed text-ink/85">
            {item.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h-display text-4xl sm:text-5xl">More from DIVCOM</h2>
            <Link href="/news" className="link-arrow shrink-0">
              View all <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
