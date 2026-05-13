import { ArrowRight, CalendarCheck, HeartPulse, Languages, LockKeyhole, Menu, Phone, Play, ShieldCheck, Star, UsersRound } from "lucide-react";
import { ExpertsSection, GallerySection } from "@/components/DynamicSections";

const services = [
  "Parenting counselling",
  "Relationship counselling",
  "Interview skills counselling",
  "Depression counselling",
  "Pregnancy counselling",
  "Teen counselling"
];

const benefits = [
  ["Affordable", "High-quality care through live sessions and guided support."],
  ["Convenient", "Talk at your own pace, from home, office or travel."],
  ["Accessible", "Support designed for cities, towns and remote areas."],
  ["Inclusive", "Regional language care for comfortable conversations."],
  ["Confidential", "Private sessions with secure, respectful handling."],
  ["Experienced", "Professionals who blend empathy with evidence-led care."]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><HeartPulse /> Heal Boxx</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#experts">Experts</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/admin">Admin</a>
        <button className="menu-btn" aria-label="Open menu"><Menu /></button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><ShieldCheck size={16} /> Mental wellness, anywhere</span>
          <h1>Heal on a call from anywhere, at any time.</h1>
          <p>Tech-enabled therapy, coaching and wellness support for emotional, psychological, social and lifestyle needs.</p>
          <div className="hero-actions">
            <a className="primary" href="#experts">Meet experts <ArrowRight size={18} /></a>
            <a className="secondary" href="#gallery"><Play size={18} /> View gallery</a>
          </div>
          <div className="metrics">
            <strong>15+<span>Years experience</span></strong>
            <strong>100+<span>Therapists</span></strong>
            <strong>500+<span>Lives supported</span></strong>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=85" alt="Counsellor speaking with a client" />
          <div className="hero-card">
            <CalendarCheck />
            <span>24/7 online support</span>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <span className="eyebrow"><Phone size={16} /> hello@healboxx.com | +91 72000 45559</span>
          <h2>Care that is warm, practical and easy to reach.</h2>
        </div>
        <p>Heal Boxx helps people work through stress, relationships, confidence, career pressure and life transitions with professional support built around everyday life.</p>
      </section>

      <section className="section services" id="services">
        <div className="section-head">
          <span className="eyebrow"><UsersRound size={16} /> Our services</span>
          <h2>Counselling and coaching for real moments.</h2>
          <p>Choose focused support for personal, family, student and workplace wellbeing.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service}>
              <img src={`https://images.unsplash.com/photo-${[
                "1517048676732-d65bc937f952",
                "1529333166437-7750a6dd5a70",
                "1551836022-d5d88e9218df",
                "1506126613408-eca07ce68773",
                "1516585427167-9f4af9627e6c",
                "1522202176988-66273c2fd55f"
              ][index]}?auto=format&fit=crop&w=900&q=80`} alt={service} />
              <h3>{service}</h3>
              <a href="#contact">Book session <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="video-strip">
        <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1400&q=85" alt="Peaceful wellness session" />
        <div>
          <button aria-label="Play promo"><Play /></button>
          <h2>How it works? Play and watch.</h2>
        </div>
      </section>

      <section className="section benefits">
        <div className="section-head compact">
          <span className="eyebrow"><Star size={16} /> Primary benefits</span>
          <h2>Why choose Heal Boxx?</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(([title, text]) => (
            <article key={title}>
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

      <GallerySection />
      <ExpertsSection />

      <section className="section testimonials">
        <div className="section-head compact">
          <span className="eyebrow">Client voices</span>
          <h2>People feel seen, heard and supported.</h2>
        </div>
        <div className="testimonial-grid">
          <blockquote>“The session helped me understand my stress without feeling judged.”<span>Working professional</span></blockquote>
          <blockquote>“Flexible online counselling made it possible to stay consistent.”<span>College student</span></blockquote>
          <blockquote>“Our EAP session gave the team practical ways to reset.”<span>HR manager</span></blockquote>
        </div>
      </section>

      <footer className="footer" >
        <div>id="contact"
          <a className="brand" href="#home"><HeartPulse /> Heal Boxx</a>
          <p>Your one-stop solution for mental health, therapy, coaching and wellness.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:hello@healboxx.com">hello@healboxx.com</a>
          <a href="tel:+917200045559">+91 72000 45559</a>
        </div>
        <div>
          <h3>Admin</h3>
          <a href="/admin/gallery">Add gallery</a>
          <a href="/admin/experts">Add experts</a>
        </div>
      </footer>
    </main>
  );
}
