import Link from "next/link";
import { ArrowRight, Download, Languages, LockKeyhole, Phone, Play, ShieldCheck, Star, UsersRound } from "lucide-react";
import { ExpertsSection, GallerySection } from "@/components/DynamicSections";
import { ProfessionalStrip, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { benefits, services } from "@/data/siteContent";

const section = "w-full max-w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-18 lg:px-14 lg:py-20";
const eyebrow = "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#096454]";
const sectionTitle = "mt-3 text-balance text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl md:text-6xl";
const muted = "text-base leading-7 text-[#63706d] sm:text-lg sm:leading-8";
const primary = "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 font-black text-white shadow-lg sm:w-auto";
const secondary = "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/15 px-5 font-black text-white backdrop-blur sm:w-auto";
const card = "overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl";

const socialLinks = [
  {
    href: "https://twitter.com/healboxx",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M14.7 10.4 22.1 2h-1.8l-6.4 7.3L8.8 2H3l7.8 11.2L3 22h1.8l6.8-7.7 5.5 7.7H23l-8.3-11.6Zm-2.4 2.7-.8-1.1L5.3 3.3H8l5 7 .8 1.1 6.5 9.2h-2.7l-5.3-7.5Z" />
      </svg>
    )
  },
  {
    href: "https://www.facebook.com/healboxx",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M14.2 8.2V6.7c0-.7.5-.9 1-.9h2.6V2.1L14.3 2c-3.5 0-4.8 2.1-4.8 4.4v1.8H6.7V12h2.8v10h4.1V12H17l.6-3.8h-3.4Z" />
      </svg>
    )
  },
  {
    href: "https://www.instagram.com/healboxx/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.9 2.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z" />
      </svg>
    )
  },
  {
    href: "https://www.youtube.com/@healboxx",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 2 12a29.2 29.2 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 22 12a29.2 29.2 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="relative grid w-full max-w-full grid-cols-1 items-center gap-7 overflow-hidden bg-[#07110f] px-4 py-8 text-white sm:px-6 md:min-h-[calc(100vh-74px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] md:px-8 lg:gap-12 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(53,215,238,.22),transparent_34%),linear-gradient(135deg,#07110f_0%,#0e332d_52%,#07110f_100%)]" />

        <div className="relative z-10 w-full max-w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_28px_90px_rgba(0,0,0,.38)] backdrop-blur sm:rounded-[28px] md:order-1">
          <div className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 gap-2 lg:grid xl:left-4 xl:gap-3">
            {socialLinks.map((item) => (
              <a
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-[#061815]/75 text-white shadow-[0_10px_28px_rgba(0,0,0,.28)] backdrop-blur transition hover:-translate-y-1 hover:bg-[#ffd35e] hover:text-[#10201d] xl:h-11 xl:w-11"
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noreferrer"
                aria-label={`HealBoxx ${item.label}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-2xl sm:aspect-[16/12] md:min-h-[500px] md:rounded-[22px] lg:min-h-[560px]">
            <video className="absolute inset-0 h-full w-full scale-[1.02] object-cover brightness-[1.18] contrast-[1.05] saturate-[1.12]" autoPlay muted loop playsInline>
              <source src="https://healboxx.com/assets1/video/introVideo.mp4" type="video/mp4" />
              <source src="https://healboxx.com/assets1/video/introVideo.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#04110f]/40 via-transparent to-white/5" />
            <div className="absolute right-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-wrap justify-end gap-2 lg:hidden">
              {socialLinks.map((item) => (
                <a
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-[#061815]/80 text-white shadow-lg backdrop-blur sm:h-10 sm:w-10"
                  href={item.href}
                  key={item.label}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`HealBoxx ${item.label}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/25 bg-[#07110f]/55 p-3 text-white shadow-2xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#9debdc] sm:text-xs sm:tracking-[.18em]"><Play size={14} /> HealBoxx care</span>
              <p className="mt-2 text-balance font-serif text-xl font-black leading-tight sm:text-2xl lg:text-3xl">Online support that feels close, calm and human.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 min-w-0 self-center md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9debdc]/35 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#9debdc] backdrop-blur"><ShieldCheck size={16} /> Mental wellness, anywhere</span>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">Heal on a call from anywhere, at any time.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">Tech-enabled therapy, coaching and wellness support for emotional, psychological, social and lifestyle needs.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Link className={primary} href="/experts">Meet experts <ArrowRight size={18} /></Link>
            <Link className={secondary} href="/gallery"><Play size={18} /> View gallery</Link>
          </div>
        </div>

        <div className="relative z-10 grid min-w-0 gap-3 self-end sm:grid-cols-3 md:order-3 md:col-span-2">
          {[
            ["15+", "Years of Experience"],
            ["100+", "Therapists"],
            ["500+", "Get help and healed"]
          ].map(([number, label]) => (
            <strong className="grid rounded-lg border border-white/20 bg-white/15 p-4 text-2xl font-black text-[#ffd35e] backdrop-blur sm:p-5" key={label}>{number}<span className="mt-1 text-sm text-white/75">{label}</span></strong>
          ))}
        </div>
      </section>

      <ProfessionalStrip />

      <section className={`${section} grid min-w-0 gap-8 border-y border-[#dce8e3] bg-white md:grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] md:items-start`}>
        <div>
          <span className={eyebrow}><Phone size={16} /> About HealBoxx</span>
          <h2 className={sectionTitle}>Care that is warm, practical and easy to reach.</h2>
        </div>
        <p className={muted}>Heal Boxx helps people work through stress, relationships, confidence, career pressure and life transitions with professional support built around everyday life.</p>
      </section>

      <section className={section}>
        <div className="mb-9 max-w-3xl">
          <span className={eyebrow}><UsersRound size={16} /> Our services</span>
          <h2 className={sectionTitle}>Counselling and coaching for real moments.</h2>
          <p className={`${muted} mt-4`}>Choose focused support for personal, family, student and workplace wellbeing.</p>
        </div>
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article className={card} key={service.title}>
              <img className="aspect-video w-full object-cover" src={service.image} alt={service.title} />
              <div className="grid gap-3 p-5">
                <h3 className="text-xl font-black text-[#10201d] sm:text-2xl">{service.title}</h3>
                <p className="leading-7 text-[#63706d]">{service.text}</p>
                <Link className="inline-flex items-center gap-2 font-black text-[#096454]" href="/contact">Book session <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="mt-7 inline-flex items-center gap-2 font-black text-[#096454]" href="/services">Explore all services <ArrowRight size={18} /></Link>
      </section>

      <section className="relative grid min-h-[430px] place-items-center overflow-hidden text-center text-white">
        <img className="absolute inset-0 h-full w-full object-cover brightness-60" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1400&q=85" alt="Peaceful wellness session" />
        <div className="relative z-10 grid place-items-center gap-5 p-6 sm:p-8">
          <button className="grid h-16 w-16 place-items-center rounded-full bg-[#f47c68] sm:h-20 sm:w-20" aria-label="Play promo"><Play /></button>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">How it works? Play and watch.</h2>
        </div>
      </section>

      <section className={`${section} grid min-w-0 items-center gap-10 bg-white md:grid-cols-[minmax(0,1fr)_minmax(0,.72fr)]`}>
        <div>
          <span className={eyebrow}><Download size={16} /> Download App</span>
          <h2 className={sectionTitle}>Carry your therapist, resources and calm resets with you.</h2>
          <p className={`${muted} mt-4`}>Inspired by HealBoxx's app-first experience, this section brings the missing app download moment into the page with clear Google Play and App Store actions.</p>
          <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
            <a className="rounded-lg bg-[#10201d] px-5 py-3 text-center font-black text-white" href="https://play.google.com/store/apps/details?id=com.healbox" target="_blank">Google Play</a>
            <a className="rounded-lg bg-[#10201d] px-5 py-3 text-center font-black text-white" href="https://apps.apple.com/us/app/healboxx/id6444076704" target="_blank">App Store</a>
          </div>
        </div>
        <img className="mx-auto max-h-[520px] object-contain" src="https://healboxx.com/assets1/img/mockup.png" alt="HealBoxx app mockup" />
      </section>

      <section className={`${section} bg-[#f5faf7]`}>
        <div className="mb-9 max-w-2xl">
          <span className={eyebrow}><Star size={16} /> Primary benefits</span>
          <h2 className={sectionTitle}>Why choose Heal Boxx?</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map(([title, text]) => (
            <article className={`${card} p-6`} key={title}>
              <LockKeyhole className="text-[#f47c68]" size={22} />
              <h3 className="mt-4 text-xl font-black text-[#10201d] sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-[#63706d]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${section} grid min-w-0 gap-8 border-y border-[#dce8e3] bg-white md:grid-cols-[minmax(0,.85fr)_minmax(0,1fr)]`}>
        <div>
          <span className={eyebrow}><Languages size={16} /> Our founders</span>
          <h2 className={sectionTitle}>Visionaries behind accessible wellness.</h2>
          <p className={`${muted} mt-4`}>Heal Boxx is guided by psychology, medical insight and a belief that mental health support should feel simple, respectful and available for everyone.</p>
        </div>
        <div className="grid gap-4">
          {["Nancy Kurian|Psychologist with 15+ years of experience", "Luke Kurian|Doctor with holistic wellness perspective", "Matthew Kurian|Mental health advocate and medical student"].map((item) => {
            const [name, detail] = item.split("|");
            return <strong className="grid rounded-lg bg-[#d8f3e8] p-5 text-[#10201d]" key={name}>{name}<span className="mt-1 text-[#63706d]">{detail}</span></strong>;
          })}
        </div>
      </section>

      <GallerySection preview />
      <ExpertsSection preview />

      <section className={section}>
        <div className="mb-9 max-w-2xl">
          <span className={eyebrow}>Client voices</span>
          <h2 className={sectionTitle}>People feel seen, heard and supported.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["The session helped me understand my stress without feeling judged.", "Working professional"],
            ["Flexible online counselling made it possible to stay consistent.", "College student"],
            ["Our EAP session gave the team practical ways to reset.", "HR manager"]
          ].map(([quote, who]) => (
            <blockquote className={`${card} p-6 text-lg leading-8 text-[#10201d]`} key={who}>"{quote}"<span className="mt-5 block text-sm font-black text-[#63706d]">{who}</span></blockquote>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
