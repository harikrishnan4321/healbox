import { GraduationCap, Phone, School } from "lucide-react";
import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function StudentRegistrationPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Student Registration"
        title="Register as a student with HealBoxx."
        text="Share your student name, college name and phone number to connect with HealBoxx wellness support."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="grid gap-6 bg-gradient-to-br from-[#d8f3e8] to-[#ece8ff] px-5 py-20 md:grid-cols-[.72fr_1fr] md:px-14">
        <aside className="rounded-lg border border-[#dce8e3] bg-white/90 p-7 shadow-2xl md:sticky md:top-28 md:self-start">
          <GraduationCap className="h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
          <h2 className="mt-5 text-4xl font-black leading-none text-[#10201d]">Student wellness access</h2>
          <p className="mt-4 leading-7 text-[#63706d]">A simple registration flow for students who want to connect with HealBoxx programs and support.</p>
          <div className="mt-6 grid gap-3">
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><School size={17} /> College details</span>
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><Phone size={17} /> Phone follow-up</span>
          </div>
        </aside>
        <StudentRegistrationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
