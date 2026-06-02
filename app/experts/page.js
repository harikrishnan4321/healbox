import { ExpertsSection } from "@/components/DynamicSections";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ExpertsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Experts"
        title="Meet the professionals behind the care."
        text="Find the right experts, handpicked for your comfort and needs, with simple search and the most relevant care filters."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=82"
      />
      <ExpertsSection />
      <SiteFooter />
    </main>
  );
}
