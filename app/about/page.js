import { HeartHandshake, Target, UsersRound } from "lucide-react";
import { PageHero, ProfessionalStrip, SiteFooter, SiteHeader } from "@/components/SiteChrome";

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
      <section className="section about-story">
        <article className="story-card">
          <HeartHandshake />
          <h2>Heal on a call from anywhere, at any time.</h2>
          <p>We create solutions that improve physical, emotional, psychological and social wellbeing, helping people move toward a calmer and more fulfilling lifestyle.</p>
        </article>
        <article className="story-card">
          <Target />
          <h3>Our mission</h3>
          <p>Make trusted mental health care affordable, confidential and easy to reach.</p>
        </article>
        <article className="story-card">
          <UsersRound />
          <h3>Our community</h3>
          <p>Therapists, coaches and wellness professionals working together for better care.</p>
        </article>
      </section>
      <ProfessionalStrip />
      <SiteFooter />
    </main>
  );
}
