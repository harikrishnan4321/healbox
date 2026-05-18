"use client";

import { useState } from "react";
import { GraduationCap, Loader2, Send } from "lucide-react";

const emptyForm = {
  studentName: "",
  collegeName: "",
  phone: ""
};

const fallbackColleges = [
  { id: "chennai-arts-science", name: "Chennai Arts and Science College", visible: true },
  { id: "madras-institute-technology", name: "Madras Institute of Technology", visible: true },
  { id: "loyola-college", name: "Loyola College", visible: true }
];

const labelClass = "grid gap-2 font-black text-[#334540]";
const fieldClass = "min-h-12 w-full rounded-lg border border-[#dce8e3] bg-[#fbfdf9] px-4 py-3 text-[#10201d] outline-none transition focus:border-[#0f8d7a] focus:ring-4 focus:ring-[#0f8d7a]/10";

export default function StudentRegistrationForm() {
  const [form, setForm] = useState(emptyForm);
  const [colleges] = useState(fallbackColleges);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
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
    <form className="grid gap-5 rounded-lg border border-[#dce8e3] bg-white/90 p-6 shadow-2xl md:p-9" onSubmit={submit}>
      <div className="flex items-center gap-4 rounded-lg bg-gradient-to-br from-[#0f8d7a] to-[#10201d] p-4 text-white">
        <GraduationCap className="text-[#ffd35e]" />
        <div>
          <span className="text-xs font-black uppercase tracking-wide text-[#9debdc]">Student onboarding</span>
          <h2 className="mt-1 text-2xl font-black">Student Registration</h2>
        </div>
      </div>

      <div className="grid gap-4">
        <label className={labelClass}>Student Name<input className={fieldClass} name="studentName" value={form.studentName} onChange={update} required /></label>
        <label className={labelClass}>
          College Name
          <select className={fieldClass} name="collegeName" value={form.collegeName} onChange={update} required>
            <option value="">Select college</option>
            {colleges.map((college) => (
              <option key={college.id || college.name} value={college.name}>{college.name}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>Phone Number<input className={fieldClass} name="phone" value={form.phone} onChange={update} required /></label>
      </div>

      <button className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 font-black text-white shadow-lg disabled:opacity-60" type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Student Registration"}
      </button>
      {status && <p className="font-black text-[#096454]">{status}</p>}
    </form>
  );
}
