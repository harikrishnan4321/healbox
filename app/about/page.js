import { HeartHandshake, Target, UsersRound } from "lucide-react";
import { PageHero, ProfessionalStrip, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const card = "rounded-lg border border-[#dce8e3] bg-white p-7 shadow-[0_16px_40px_rgba(25,53,48,.08)]";
const icon = "text-[#0f8d7a]";
const title = "mt-5 text-3xl font-black leading-tight text-[#10201d]";
const text = "mt-3 leading-7 text-[#63706d]";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About Us"
        title="A tech-enabled wellness platform with a human heart."
        text="HealBoxx brings therapy, coaching and self-care resources into one accessible experience for people, families and teams."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="grid gap-5 px-5 py-20 md:grid-cols-3 md:px-14">
        <article className={`${card} bg-[#d8f3e8]`}>
          <HeartHandshake className={icon} />
          <h2 className={title}>Heal on a call from anywhere, at any time.</h2>
          <p className={text}>We create solutions that improve physical, emotional, psychological and social wellbeing, helping people move toward a calmer and more fulfilling lifestyle.</p>
        </article>
        <article className={card}>
          <Target className={icon} />
          <h3 className={title}>Our mission</h3>
          <p className={text}>Make trusted mental health care affordable, confidential and easy to reach.</p>
        </article>
        <article className={card}>
          <UsersRound className={icon} />
          <h3 className={title}>Our community</h3>
          <p className={text}>Therapists, coaches and wellness professionals working together for better care.</p>
        </article>
      </section>
      <ProfessionalStrip />
      <SiteFooter />
    </main>
  );
}
