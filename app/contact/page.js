import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Start with one simple conversation."
        text="Reach out for individual counselling, family support, EAP sessions or wellness coaching."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="section contact-grid">
        <article className="contact-card lifted">
          <Phone />
          <h3>Call</h3>
          <a href="tel:+917200045559">+91 72000 45559</a>
        </article>
        <article className="contact-card lifted">
          <Mail />
          <h3>Email</h3>
          <a href="mailto:hello@healboxx.com">hello@healboxx.com</a>
        </article>
        <article className="contact-card lifted">
          <MapPin />
          <h3>Mode</h3>
          <p>Online counselling and workplace wellness sessions.</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
