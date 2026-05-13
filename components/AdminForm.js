"use client";

import { useState } from "react";
import { Plus, Save } from "lucide-react";

const emptyGallery = { title: "", type: "image", src: "", caption: "" };
const emptyExpert = { name: "", role: "", specialty: "", experience: "", image: "" };

export default function AdminForm({ mode }) {
  const isGallery = mode === "gallery";
  const [form, setForm] = useState(isGallery ? emptyGallery : emptyExpert);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setSaving(true);
    setStatus("");

    const response = await fetch(`/api/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setForm(isGallery ? emptyGallery : emptyExpert);
      setStatus(`${isGallery ? "Gallery item" : "Expert"} added successfully.`);
    } else {
      const error = await response.json();
      setStatus(error.message || "Unable to save. Please check the fields.");
    }

    setSaving(false);
  }

  return (
    <form className="admin-form" onSubmit={submit}>
      <div className="admin-form-title">
        <Plus size={20} />
        <h2>Add {isGallery ? "Gallery Media" : "Expert"}</h2>
      </div>

      {isGallery ? (
        <>
          <label>Title<input name="title" value={form.title} onChange={update} required /></label>
          <label>Type
            <select name="type" value={form.type} onChange={update}>
              <option value="image">Image</option>
              <option value="gif">GIF</option>
            </select>
          </label>
          <label>Image or GIF URL<input name="src" value={form.src} onChange={update} required /></label>
          <label>Caption<textarea name="caption" value={form.caption} onChange={update} /></label>
        </>
      ) : (
        <>
          <label>Name<input name="name" value={form.name} onChange={update} required /></label>
          <label>Role<input name="role" value={form.role} onChange={update} required /></label>
          <label>Specialty<textarea name="specialty" value={form.specialty} onChange={update} /></label>
          <label>Experience<input name="experience" value={form.experience} onChange={update} /></label>
          <label>Profile Image URL<input name="image" value={form.image} onChange={update} required /></label>
        </>
      )}

      <button type="submit" disabled={saving}>
        <Save size={18} />
        {saving ? "Saving..." : "Save"}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
