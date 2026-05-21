import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { services } from "@/data/siteContent";

const card = "overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl";

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Focused support for mind, family and work life."
        text="Explore counselling and coaching options designed for everyday emotional wellness."
        image="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="px-5 py-14 sm:px-6 md:px-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article className={card} key={service.title}>
              <img className="aspect-video w-full object-cover" src={service.image} alt={service.title} />
              <div className="grid gap-3 p-5">
                <h3 className="text-xl font-black text-[#10201d] sm:text-2xl">{service.title}</h3>
                <p className="leading-7 text-[#63706d]">{service.text}</p>
                <Link className="inline-flex items-center gap-2 font-black text-[#096454]" href="/contact"><CheckCircle2 size={16} /> Book this service <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
