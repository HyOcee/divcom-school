import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/Section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of life at DIVCOM Nursery & Primary School — classrooms, events, sports, arts, music and facilities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Moments that make us smile."
        intro="A glimpse into the everyday joy, discovery and celebration that fill our classrooms and corridors."
        photo={{ alt: "Pupils at play" }}
      />
      <section className="container-x py-20 sm:py-28">
        <GalleryGrid />
      </section>
      <CtaBand />
    </>
  );
}
