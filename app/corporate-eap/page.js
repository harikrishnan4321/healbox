import Link from "next/link";
import { ArrowRight, Building2, LineChart, ShieldCheck } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const card = "rounded-lg border border-[#dce8e3] bg-white p-5 shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl sm:p-7";

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
      <section className="grid w-full max-w-full gap-5 overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-3 lg:px-14 lg:py-20">
        {[
          [Building2, "Employee Assistance", "Private counselling access for employees and families."],
          [ShieldCheck, "Confidential care", "Respectful support pathways with secure handling."],
          [LineChart, "Team growth", "Workshops for stress, leadership, burnout and communication."]
        ].map(([Icon, title, text]) => (
          <article className={card} key={title}>
            <Icon className="text-[#0f8d7a]" />
            <h3 className="mt-5 text-xl font-black text-[#10201d] sm:text-2xl">{title}</h3>
            <p className="mt-3 leading-7 text-[#63706d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="flex w-full max-w-full flex-col gap-5 overflow-hidden bg-[#10201d] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-10 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-20">
        <h2 className="max-w-3xl text-3xl font-black leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">Plan an EAP session for your organisation.</h2>
        <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 font-black text-white shadow-lg lg:shrink-0" href="/hello">Talk to HealBoxx <ArrowRight size={18} /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
