"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  profession: "",
  specialization: "",
  experience: "",
  city: "",
  qualification: "",
  message: ""
};

const labelClass = "grid gap-2 font-black text-[#334540]";
const fieldClass = "min-h-12 w-full rounded-lg border border-[#dce8e3] bg-[#fbfdf9] px-4 py-3 text-[#10201d] outline-none transition focus:border-[#0f8d7a] focus:ring-4 focus:ring-[#0f8d7a]/10";

export default function RegistrationForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setStatus("");

    const saved = JSON.parse(localStorage.getItem("healboxxProfessionalRegistrations") || "[]");
    const registration = {
      ...form,
      id: `${form.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      status: "New",
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("healboxxProfessionalRegistrations", JSON.stringify([registration, ...saved]));
    setForm(emptyForm);
    setStatus("Registration submitted. Your details are saved for the HealBoxx team.");

    setSaving(false);
  }

  return (
    <form className="grid min-w-0 gap-5 rounded-lg border border-[#dce8e3] bg-white/90 p-5 shadow-2xl sm:p-6 md:p-9" onSubmit={submit}>
      <div className="flex items-start gap-3 rounded-lg bg-[#10201d] p-4 text-white sm:items-center sm:gap-4">
        <CheckCircle2 className="shrink-0 text-[#ffd35e]" />
        <div>
          <span className="text-xs font-black uppercase tracking-wide text-[#9debdc]">Professional onboarding</span>
          <h2 className="mt-1 text-xl font-black sm:text-2xl">Register with HealBoxx</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>Full Name<input className={fieldClass} name="name" value={form.name} onChange={update} required /></label>
        <label className={labelClass}>Email<input className={fieldClass} type="email" name="email" value={form.email} onChange={update} required /></label>
        <label className={labelClass}>Phone<input className={fieldClass} name="phone" value={form.phone} onChange={update} required /></label>
        <label className={labelClass}>Profession<input className={fieldClass} name="profession" value={form.profession} onChange={update} placeholder="Psychologist, coach, doctor..." required /></label>
        <label className={labelClass}>Specialization<input className={fieldClass} name="specialization" value={form.specialization} onChange={update} /></label>
        <label className={labelClass}>Experience<input className={fieldClass} name="experience" value={form.experience} onChange={update} placeholder="8+ years" /></label>
        <label className={labelClass}>City<input className={fieldClass} name="city" value={form.city} onChange={update} /></label>
        <label className={labelClass}>Qualification<input className={fieldClass} name="qualification" value={form.qualification} onChange={update} /></label>
        <label className={`${labelClass} md:col-span-2`}>Message<textarea className={`${fieldClass} min-h-32 resize-y`} name="message" value={form.message} onChange={update} placeholder="Tell us about your practice, availability or services." /></label>
      </div>

      <button className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 text-sm font-black text-white shadow-lg disabled:opacity-60 sm:text-base" type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Registration"}
      </button>
      {status && <p className="font-black text-[#096454]">{status}</p>}
    </form>
  );
}
