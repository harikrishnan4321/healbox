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
      <section className="section register-layout">
        <aside className="register-aside">
          <GraduationCap />
          <h2>Student wellness access</h2>
          <p>A simple registration flow for students who want to connect with HealBoxx programs and support.</p>
          <div>
            <span><School size={17} /> College details</span>
            <span><Phone size={17} /> Phone follow-up</span>
          </div>
        </aside>
        <StudentRegistrationForm />
      </section>
      <SiteFooter />
    </main>
  );
}
