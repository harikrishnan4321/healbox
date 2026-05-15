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

    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setForm(emptyForm);
      setStatus("Registration submitted. The HealBoxx team will review your details.");
    } else {
      const error = await response.json();
      setStatus(error.message || "Unable to submit registration.");
    }

    setSaving(false);
  }

  return (
    <form className="register-form" onSubmit={submit}>
      <div className="form-banner">
        <CheckCircle2 />
        <div>
          <span>Professional onboarding</span>
          <h2>Register with HealBoxx</h2>
        </div>
      </div>

      <div className="form-grid">
        <label>Full Name<input name="name" value={form.name} onChange={update} required /></label>
        <label>Email<input type="email" name="email" value={form.email} onChange={update} required /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={update} required /></label>
        <label>Profession<input name="profession" value={form.profession} onChange={update} placeholder="Psychologist, coach, doctor..." required /></label>
        <label>Specialization<input name="specialization" value={form.specialization} onChange={update} /></label>
        <label>Experience<input name="experience" value={form.experience} onChange={update} placeholder="8+ years" /></label>
        <label>City<input name="city" value={form.city} onChange={update} /></label>
        <label>Qualification<input name="qualification" value={form.qualification} onChange={update} /></label>
        <label className="wide">Message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us about your practice, availability or services." /></label>
      </div>

      <button type="submit" disabled={saving}>
        {saving ? <Loader2 className="spin" /> : <Send />}
        {saving ? "Submitting..." : "Submit Registration"}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
