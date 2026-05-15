import Link from "next/link";
import { ArrowRight, Download, Languages, LockKeyhole, Phone, Play, ShieldCheck, Star, UsersRound } from "lucide-react";
import { ExpertsSection, GallerySection } from "@/components/DynamicSections";
import { ProfessionalStrip, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { benefits, services } from "@/data/siteContent";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero video-hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://healboxx.com/assets1/video/introVideo.mp4" type="video/mp4" />
          <source src="https://healboxx.com/assets1/video/introVideo.webm" type="video/webm" />
        </video>
        <div className="video-shade" />
        <div className="hero-copy video-copy">
          <span className="eyebrow"><ShieldCheck size={16} /> Mental wellness, anywhere</span>
          <h1>Heal on a call from anywhere, at any time.</h1>
          <p>Tech-enabled therapy, coaching and wellness support for emotional, psychological, social and lifestyle needs.</p>
          <div className="hero-actions">
            <Link className="primary" href="/experts">Meet experts <ArrowRight size={18} /></Link>
            <Link className="secondary glass-action" href="/gallery"><Play size={18} /> View gallery</Link>
          </div>
        </div>
        <div className="hero-features">
          <strong>15+<span>Years of Experience</span></strong>
          <strong>100+<span>Therapists</span></strong>
          <strong>500+<span>Get help and healed</span></strong>
        </div>
      </section>

      <ProfessionalStrip />

      <section className="section intro">
        <div>
          <span className="eyebrow"><Phone size={16} /> About HealBoxx</span>
          <h2>Care that is warm, practical and easy to reach.</h2>
        </div>
        <p>Heal Boxx helps people work through stress, relationships, confidence, career pressure and life transitions with professional support built around everyday life.</p>
      </section>

      <section className="section services-preview">
        <div className="section-head">
          <span className="eyebrow"><UsersRound size={16} /> Our services</span>
          <h2>Counselling and coaching for real moments.</h2>
          <p>Choose focused support for personal, family, student and workplace wellbeing.</p>
        </div>
        <div className="service-grid">
          {services.slice(0, 3).map((service) => (
            <article className="service-card lifted" key={service.title}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/contact">Book session <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
        <Link className="section-link" href="/services">Explore all services <ArrowRight size={18} /></Link>
      </section>

      <section className="video-strip">
        <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1400&q=85" alt="Peaceful wellness session" />
        <div>
          <button aria-label="Play promo"><Play /></button>
          <h2>How it works? Play and watch.</h2>
        </div>
      </section>

      <section className="section app-download">
        <div>
          <span className="eyebrow"><Download size={16} /> Download App</span>
          <h2>Carry your therapist, resources and calm resets with you.</h2>
          <p>Inspired by HealBoxx's app-first experience, this section brings the missing app download moment into the page with clear Google Play and App Store actions.</p>
          <div className="store-actions">
            <a href="https://play.google.com/store/apps/details?id=com.healbox" target="_blank">Google Play</a>
            <a href="https://apps.apple.com/us/app/healboxx/id6444076704" target="_blank">App Store</a>
          </div>
        </div>
        <img src="https://healboxx.com/assets1/img/mockup.png" alt="HealBoxx app mockup" />
      </section>

      <section className="section benefits">
        <div className="section-head compact">
          <span className="eyebrow"><Star size={16} /> Primary benefits</span>
          <h2>Why choose Heal Boxx?</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(([title, text]) => (
            <article className="lifted" key={title}>
              <LockKeyhole size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section founders">
        <div>
          <span className="eyebrow"><Languages size={16} /> Our founders</span>
          <h2>Visionaries behind accessible wellness.</h2>
          <p>Heal Boxx is guided by psychology, medical insight and a belief that mental health support should feel simple, respectful and available for everyone.</p>
        </div>
        <div className="founder-list">
          <strong>Nancy Kurian <span>Psychologist with 15+ years of experience</span></strong>
          <strong>Luke Kurian <span>Doctor with holistic wellness perspective</span></strong>
          <strong>Matthew Kurian <span>Mental health advocate and medical student</span></strong>
        </div>
      </section>

      <GallerySection preview />
      <ExpertsSection preview />

      <section className="section testimonials">
        <div className="section-head compact">
          <span className="eyebrow">Client voices</span>
          <h2>People feel seen, heard and supported.</h2>
        </div>
        <div className="testimonial-grid">
          <blockquote>"The session helped me understand my stress without feeling judged."<span>Working professional</span></blockquote>
          <blockquote>"Flexible online counselling made it possible to stay consistent."<span>College student</span></blockquote>
          <blockquote>"Our EAP session gave the team practical ways to reset."<span>HR manager</span></blockquote>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
