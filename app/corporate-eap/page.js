import Link from "next/link";
import { ArrowRight, Building2, LineChart, ShieldCheck } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function CorporatePage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Corporate and EAP session"
        title="Wellness programs for healthier, steadier teams."
        text="Bring confidential counselling, stress support and resilience programs into your workplace."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="section eap-grid">
        {[
          [Building2, "Employee Assistance", "Private counselling access for employees and families."],
          [ShieldCheck, "Confidential care", "Respectful support pathways with secure handling."],
          [LineChart, "Team growth", "Workshops for stress, leadership, burnout and communication."]
        ].map(([Icon, title, text]) => (
          <article className="contact-card lifted" key={title}>
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <section className="section cta-band">
        <h2>Plan an EAP session for your organisation.</h2>
        <Link className="primary" href="/hello">Talk to HealBoxx <ArrowRight size={18} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
