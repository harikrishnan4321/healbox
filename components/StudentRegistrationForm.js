"use client";

import { useState } from "react";
import { GraduationCap, Loader2, Send } from "lucide-react";
import { apiClient } from "@/lib/apiClient";

const emptyForm = {
  name: "",
  phone: ""
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

  async function submit(event) {
    event.preventDefault();

    setSaving(true);
    setStatus("");

    try {
      const response = await apiClient.post(
        "/students/addstudent",
        form
      );

      setForm(emptyForm);

      setStatus(response.data.message);

    } catch (error) {

      setStatus(
        error?.response?.data?.message ||
        "Failed to submit student registration."
      );

    } finally {
      setSaving(false);
    }
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
        <input
          className={fieldClass}
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Enter student name"
          required
        />
      </label>

      <label className={labelClass}>
        Mobile Number
        <input
          className={fieldClass}
          name="phone"
          value={form.phone}
          onChange={update}
          inputMode="tel"
          placeholder="Enter mobile number"
          required
        />
      </label>

      <button className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#0f8d7a] to-[#13aa91] px-5 text-sm font-black text-white shadow-lg disabled:opacity-60 sm:text-base" type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Student Registration"}
      </button>

      {status && (
        <p
          className={`inline-flex items-center gap-2 font-black ${status.includes("success")
              ? "text-[#096454]"
              : "text-red-500"
            }`}
        >{status}</p>
      )}


    </form>
  );
}
