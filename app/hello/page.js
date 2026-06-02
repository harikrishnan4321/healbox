import { Download, Mail, MapPin, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const card = "rounded-lg border border-[#dce8e3] bg-white p-5 shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl sm:p-7";

export default function HelloPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Hello"
        title="Start with one simple conversation."
        text="Reach out for counselling, family support, EAP sessions or app-based care made for the kind of help you need."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"
      />
      <section className="grid w-full max-w-full gap-6 overflow-hidden bg-[#10201d] px-4 py-10 text-white sm:px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-14">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#9debdc]"><Download size={16} /> App care</span>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Support that fits every difficulty.</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/76 sm:text-lg">HealBoxx helps differently across parenting, relationships, career pressure, low mood, student stress and workplace wellbeing, so the app feels tailor-made for what you are facing.</p>
        </div>
        <div className="grid gap-3 sm:flex">
          <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ffd35e] px-5 font-black text-[#10201d]" href="https://play.google.com/store/apps/details?id=com.healbox" target="_blank" rel="noreferrer">Google Play</a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 font-black text-white" href="https://apps.apple.com/us/app/healboxx/id6444076704" target="_blank" rel="noreferrer">App Store</a>
        </div>
      </section>
      <section className="grid w-full max-w-full gap-5 overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-3 lg:px-14 lg:py-20">
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
