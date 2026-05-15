import { ExpertsSection } from "@/components/DynamicSections";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ExpertsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Experts"
        title="Meet the professionals behind the care."
        text="Expert profiles are fetched from the backend experts API with search and role filters."
        image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
      />
      <ExpertsSection />
      <SiteFooter />
    </main>
  );
}
