import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { services } from "@/data/siteContent";

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
      <section className="section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card lifted" key={service.title}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/contact"><CheckCircle2 size={16} /> Book this service <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
