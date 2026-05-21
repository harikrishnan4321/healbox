import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const card = "rounded-lg border border-[#dce8e3] bg-white p-5 shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl sm:p-7";

export default function HelloPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Hello"
        title="Start with one simple conversation."
        text="Reach out for individual counselling, family support, EAP sessions or wellness coaching."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="grid gap-5 px-5 py-14 sm:px-6 md:grid-cols-3 md:px-14 md:py-20">
        <article className={card}>
          <Phone className="text-[#0f8d7a]" />
          <h3 className="mt-5 text-xl font-black text-[#10201d] sm:text-2xl">Call</h3>
          <a className="mt-3 inline-flex font-black text-[#096454]" href="tel:+917200045559">+91 72000 45559</a>
        </article>
        <article className={card}>
          <Mail className="text-[#0f8d7a]" />
          <h3 className="mt-5 text-xl font-black text-[#10201d] sm:text-2xl">Email</h3>
          <a className="mt-3 inline-flex break-all font-black text-[#096454]" href="mailto:hello@healboxx.com">hello@healboxx.com</a>
        </article>
        <article className={card}>
          <MapPin className="text-[#0f8d7a]" />
          <h3 className="mt-5 text-xl font-black text-[#10201d] sm:text-2xl">Coimbatore</h3>
          <p className="mt-3 leading-7 text-[#63706d]">33, E TV Swamy Rd, R.S. Puram, 641002</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
