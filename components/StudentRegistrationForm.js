"use client";

import { useState } from "react";
import { CheckCircle2, GraduationCap, Loader2, Send } from "lucide-react";
import content from "@/data/content.json";

const colleges = content.colleges || [];

const emptyForm = {
  studentName: "",
  phone: "",
  college: ""
};

const labelClass = "grid gap-2 font-black text-[#334540]";
const fieldClass = "min-h-12 w-full rounded-lg border border-[#dce8e3] bg-[#fbfdf9] px-4 py-3 text-[#10201d] outline-none transition focus:border-[#0f8d7a] focus:ring-4 focus:ring-[#0f8d7a]/10";

export default function StudentRegistrationForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    setSaving(true);
    setStatus("");

    const saved = JSON.parse(localStorage.getItem("healboxxStudentRegistrations") || "[]");
    const registration = {
      ...form,
      id: `${form.studentName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("healboxxStudentRegistrations", JSON.stringify([registration, ...saved]));
    setForm(emptyForm);
    setStatus("Student registration submitted successfully.");
    setSaving(false);
  }

  return (
    <form className="grid min-w-0 gap-5 rounded-lg border border-[#dce8e3] bg-white/90 p-5 shadow-2xl sm:p-6 md:p-8" onSubmit={submit}>
      <div className="flex items-start gap-3 rounded-lg bg-[#10201d] p-4 text-white sm:items-center sm:gap-4">
        <GraduationCap className="shrink-0 text-[#ffd35e]" />
        <div>
          <span className="text-xs font-black uppercase tracking-wide text-[#9debdc]">Student onboarding</span>
          <h2 className="mt-1 text-xl font-black sm:text-2xl">Student Registration</h2>
        </div>
      </div>

      <label className={labelClass}>
        Student Name
        <input className={fieldClass} name="studentName" value={form.studentName} onChange={update} placeholder="Enter student name" required />
      </label>

      <label className={labelClass}>
        Mobile Number
        <input className={fieldClass} name="phone" value={form.phone} onChange={update} inputMode="tel" placeholder="Enter mobile number" required />
      </label>

      <label className={labelClass}>
        College
        <select className={fieldClass} name="college" value={form.college} onChange={update} required>
          <option value="">Select college</option>
          {colleges.map((college) => (
            <option value={college} key={college}>{college}</option>
          ))}
        </select>
      </label>

      <button className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 text-sm font-black text-white shadow-lg disabled:opacity-60 sm:text-base" type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Student Registration"}
      </button>

      {status && <p className="inline-flex items-center gap-2 font-black text-[#096454]"><CheckCircle2 size={18} /> {status}</p>}
    </form>
  );
}
