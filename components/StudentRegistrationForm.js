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
    <form className="register-form student-form" onSubmit={submit}>
      <div className="form-banner">
        <GraduationCap />
        <div>
          <span>Student onboarding</span>
          <h2>Student Registration</h2>
        </div>
      </div>

      <div className="form-grid student-form-grid">
        <label>Student Name<input name="studentName" value={form.studentName} onChange={update} required /></label>
        <label>
          College Name
          <select name="collegeName" value={form.collegeName} onChange={update} required>
            <option value="">Select college</option>
            {colleges.map((college) => (
              <option key={college.id || college.name} value={college.name}>{college.name}</option>
            ))}
          </select>
        </label>
        <label className="wide">Phone Number<input name="phone" value={form.phone} onChange={update} required /></label>
      </div>

      <button type="submit" disabled={saving}>
        {saving ? <Loader2 className="spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Student Registration"}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
