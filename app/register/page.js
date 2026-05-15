import { FileBadge2, ShieldCheck, Star } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function RegisterPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Professional Registration"
        title="Join HealBoxx as a trusted wellness professional."
        text="Register your practice details. The HealBoxx team will review your request and contact you."
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="section register-layout">
        <aside className="register-aside">
          <FileBadge2 />
          <h2>Are you a professional?</h2>
          <p>Share your details to be reviewed by the HealBoxx team. This is a simple user-side onboarding request.</p>
          <div>
            <span><ShieldCheck size={17} /> Confidential review</span>
            <span><Star size={17} /> Expert profile onboarding</span>
          </div>
        </aside>
        <RegistrationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
