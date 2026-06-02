import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const posts = [
  ["How online therapy makes care easier", "A practical look at convenience, privacy and consistency."],
  ["Burnout signs teams should notice early", "Simple signals that workplace wellness programs can address."],
  ["Guided breathing for stressful moments", "Short resets that help the body and mind slow down."]
];

const card = "rounded-lg border border-[#dce8e3] bg-white p-5 shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl sm:p-7";

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Blog"
        title="Wellness ideas for everyday life."
        text="Insights from the HealBoxx world on therapy, work, relationships and self-care."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82"
      />
      <section className="grid w-full max-w-full gap-5 overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-3 lg:px-14 lg:py-20">
        {posts.map(([title, text]) => (
          <article className={card} key={title}>
            <BookOpenText className="text-[#0f8d7a]" />
            <h3 className="mt-5 text-xl font-black text-[#10201d] sm:text-2xl">{title}</h3>
            <p className="mt-3 leading-7 text-[#63706d]">{text}</p>
            <Link className="mt-5 inline-flex items-center gap-2 font-black text-[#096454]" href="/hello">Read more <ArrowRight size={16} /></Link>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
