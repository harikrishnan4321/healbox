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
      <section className="grid w-full max-w-full gap-6 overflow-hidden bg-gradient-to-br from-[#d8f3e8] to-[#ece8ff] px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[minmax(0,.72fr)_minmax(0,1fr)] md:px-10 md:py-20 lg:px-14">
        <aside className="rounded-lg border border-[#dce8e3] bg-white/90 p-5 shadow-2xl sm:p-7 md:sticky md:top-28 md:self-start">
          <FileBadge2 className="h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
          <h2 className="mt-5 text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl">Are you a professional?</h2>
          <p className="mt-4 leading-7 text-[#63706d]">Share your details to be reviewed by the HealBoxx team. This is a simple user-side onboarding request.</p>
          <div className="mt-6 grid gap-3">
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><ShieldCheck size={17} /> Confidential review</span>
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><Star size={17} /> Expert profile onboarding</span>
          </div>
        </aside>
        <RegistrationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
