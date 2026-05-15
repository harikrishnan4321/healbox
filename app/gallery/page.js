import { GallerySection } from "@/components/DynamicSections";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Gallery"
        title="Visual moments from Heal Boxx wellness care."
        text="This page is powered by the backend gallery API, including wellness images and GIFs."
        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85"
      />
      <GallerySection />
      <SiteFooter />
    </main>
  );
}
