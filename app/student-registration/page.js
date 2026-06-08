"use client";

import { useEffect, useState } from "react";
import { LockKeyhole, LogOut, ShieldCheck, UsersRound } from "lucide-react";
import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const studentLoginKey = "healboxx_student_login";

function StudentLogin({ onLogin }) {
  const [values, setValues] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  function updateValue(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!values.user.trim() || !values.password.trim()) {
      setError("Enter login details to continue.");
      return;
    }

    sessionStorage.setItem(studentLoginKey, "true");
    onLogin();
  }

  return (
    <section className="grid w-full max-w-full place-items-center overflow-hidden bg-[#f8fffc] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
      <form className="w-full max-w-md rounded-lg border border-[#dce8e3] bg-white p-5 shadow-[0_24px_70px_rgba(16,32,29,.12)] sm:p-7" onSubmit={handleSubmit}>
        <LockKeyhole className="h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
        <h2 className="mt-5 text-3xl font-black leading-tight text-[#10201d]">Student login</h2>
        <p className="mt-3 leading-7 text-[#63706d]">Login first to continue to the student registration form.</p>

        <label className="mt-6 grid gap-2 text-sm font-black text-[#10201d]">
          Email or mobile number
          <input
            className="min-h-12 rounded-lg border border-[#dce8e3] bg-[#f8fffc] px-4 font-medium outline-none transition focus:border-[#096454] focus:bg-white"
            name="user"
            onChange={updateValue}
            placeholder="Enter email or mobile"
            type="text"
            value={values.user}
          />
        </label>

        <label className="mt-4 grid gap-2 text-sm font-black text-[#10201d]">
          Password
          <input
            className="min-h-12 rounded-lg border border-[#dce8e3] bg-[#f8fffc] px-4 font-medium outline-none transition focus:border-[#096454] focus:bg-white"
            name="password"
            onChange={updateValue}
            placeholder="Enter password"
            type="password"
            value={values.password}
          />
        </label>

        {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-black text-red-700">{error}</p>}

        <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#ffd35e] px-5 font-black text-[#10201d] transition hover:bg-[#ffe08a]" type="submit">
          Login and continue
        </button>
      </form>
    </section>
  );
}

function StudentFormSection({ onLogout }) {
  return (
    <section className="grid w-full max-w-full gap-6 overflow-hidden bg-gradient-to-br from-[#d8f3e8] to-[#fff4d6] px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1fr)] lg:px-14 lg:py-20">
      <aside className="rounded-lg border border-[#dce8e3] bg-white/90 p-5 shadow-2xl sm:p-7 lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start justify-between gap-4">
          <LockKeyhole className="h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 text-sm font-black text-[#10201d] transition hover:border-[#096454] hover:text-[#096454]"
            onClick={onLogout}
            type="button"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
        <h2 className="mt-5 text-3xl font-black leading-[1.05] text-[#10201d] sm:text-4xl">Student wellness access.</h2>
        <p className="mt-4 leading-7 text-[#63706d]">Complete the form by providing your name, contact number, and college.</p>
        <div className="mt-6 grid gap-3">
          <span className="inline-flex items-center gap-2 font-black text-[#096454]"><ShieldCheck size={17} /> Simple student details</span>
          <span className="inline-flex items-center gap-2 font-black text-[#096454]"><UsersRound size={17} /> College-based registration</span>
        </div>
      </aside>
      <StudentRegistrationForm />
    </section>
  );
}

export default function StudentRegistrationPage() {
  const [ready, setReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(sessionStorage.getItem(studentLoginKey) === "true");
    setReady(true);
  }, []);

  function handleLogout() {
    sessionStorage.removeItem(studentLoginKey);
    setLoggedIn(false);
  }

  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Student Registration"
        title="Register students for guided wellness support."
        text="Student registration is available through direct access after login."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82"
      />
      {ready && loggedIn ? <StudentFormSection onLogout={handleLogout} /> : <StudentLogin onLogin={() => setLoggedIn(true)} />}
      <SiteFooter />
    </main>
  );
}
