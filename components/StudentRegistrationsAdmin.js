"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Loader2 } from "lucide-react";
import content from "@/data/content.json";

export default function StudentRegistrationsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("healboxxStudentRegistrations") || "[]");
    setItems([...saved, ...(content.studentRegistrations || [])]);
    setLoading(false);
  }, []);

  return (
    <section className="mx-auto mt-8 max-w-6xl rounded-lg border border-[#dce8e3] bg-white/90 p-6 shadow-2xl md:p-9">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#096454]"><GraduationCap size={16} /> Student requests</span>
          <h1 className="mt-2 text-4xl font-black text-[#10201d]">{items.length} student registrations</h1>
        </div>
      </div>

      {loading ? (
        <div className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]"><Loader2 className="animate-spin" /> Loading student registrations</div>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <article className="grid gap-4 rounded-lg border border-[#dce8e3] bg-[#fbfdf9] p-5" key={item.id}>
              <div>
                <h3 className="text-xl font-black text-[#10201d]">{item.studentName}</h3>
                <p className="mt-1 text-[#63706d]">{item.collegeName}</p>
              </div>
              <dl className="grid gap-3 md:grid-cols-2">
                <div><dt className="text-xs font-black uppercase text-[#63706d]">Phone</dt><dd className="mt-1 font-bold text-[#10201d]">{item.phone}</dd></div>
                <div><dt className="text-xs font-black uppercase text-[#63706d]">Submitted</dt><dd className="mt-1 font-bold text-[#10201d]">{new Date(item.createdAt).toLocaleString()}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
