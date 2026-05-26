import { GraduationCap, ShieldCheck, UsersRound } from "lucide-react";
import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

export default function StudentRegistrationPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Student Registration"
        title="Register students for guided wellness support."
        text="Share basic student details and choose the college from the available list."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
      />
      <section className="grid w-full max-w-full gap-6 overflow-hidden bg-gradient-to-br from-[#d8f3e8] to-[#fff4d6] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1fr)] lg:px-14 lg:py-20">
        <aside className="rounded-lg border border-[#dce8e3] bg-white/90 p-5 shadow-2xl sm:p-7 lg:sticky lg:top-28 lg:self-start">
          <GraduationCap className="h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
          <h2 className="mt-5 text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl">Student wellness access.</h2>
          <p className="mt-4 leading-7 text-[#63706d]">Use this simple frontend form to collect student name, phone number and college selection.</p>
          <div className="mt-6 grid gap-3">
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><ShieldCheck size={17} /> Simple student details</span>
            <span className="inline-flex items-center gap-2 font-black text-[#096454]"><UsersRound size={17} /> College-based registration</span>
          </div>
        </aside>
        <StudentRegistrationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
