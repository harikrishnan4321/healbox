import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const posts = [
  ["How online therapy makes care easier", "A practical look at convenience, privacy and consistency."],
  ["Burnout signs teams should notice early", "Simple signals that workplace wellness programs can address."],
  ["Guided breathing for stressful moments", "Short resets that help the body and mind slow down."]
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Blog"
        title="Wellness ideas for everyday life."
        text="Insights from the HealBoxx world on therapy, work, relationships and self-care."
        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="section blog-grid">
        {posts.map(([title, text]) => (
          <article className="blog-card lifted" key={title}>
            <BookOpenText />
            <h3>{title}</h3>
            <p>{text}</p>
            <Link href="/hello">Read more <ArrowRight size={16} /></Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
