import { GallerySection } from "@/components/DynamicSections";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Gallery"
        title="Care moments for real life."
        text="Browse therapy, family, student, workplace and app-based support moments so every image has a clear connection to HealBoxx care."
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=82"
      />
      <GallerySection />
      <SiteFooter />
    </main>
  );
}
