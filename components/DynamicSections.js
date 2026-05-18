"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, ChevronLeft, ChevronRight, Filter, ImageIcon, Loader2, Search, Sparkles } from "lucide-react";
import content from "@/data/content.json";

const pageSize = 6;
const section = "px-5 py-20 md:px-14";
const eyebrow = "inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#096454]";
const sectionHead = "mb-9 max-w-3xl";
const sectionTitle = "mt-3 text-balance text-4xl font-black leading-none text-[#10201d] md:text-6xl";
const sectionText = "mt-4 text-lg leading-8 text-[#63706d]";
const inputShell = "flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-[#dce8e3] bg-white px-4 text-[#10201d]";
const card = "overflow-hidden rounded-lg border border-[#dce8e3] bg-white shadow-[0_16px_40px_rgba(25,53,48,.08)] transition hover:-translate-y-1 hover:shadow-2xl";

export function GallerySection({ preview = false }) {
  const [items] = useState(content.gallery || []);
  const [loading] = useState(false);
  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const requestedType = new URLSearchParams(window.location.search).get("type");
    if (requestedType === "image" || requestedType === "gif") {
      setType(requestedType);
    }
  }, []);

  const filtered = items.filter((item) => {
    const matchesType = type === "all" || item.type === type;
    const matchesQuery = `${item.title} ${item.caption}`.toLowerCase().includes(query.toLowerCase());
    return matchesType && matchesQuery;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleItems = preview ? items.slice(0, 4) : filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className={`${section} bg-[#10201d] text-white`} id="gallery">
      <div className={sectionHead}>
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#c8efe2]"><ImageIcon size={16} /> Gallery</span>
        <h2 className="mt-3 text-balance text-4xl font-black leading-none md:text-6xl">Moments that feel calm, human and hopeful.</h2>
        <p className="mt-4 text-lg leading-8 text-white/70">These photos and GIFs are loaded from the content store and stay responsive on mobile, tablet and desktop.</p>
      </div>

      {!preview && (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 text-white">
            <Search size={16} />
            <input className="w-full bg-transparent outline-none placeholder:text-white/60" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search gallery" />
          </label>
          <div className="flex flex-wrap gap-2">
            {["all", "image", "gif"].map((option) => (
              <button className={`${type === option ? "bg-[#ffd35e] text-[#10201d]" : "bg-white text-[#10201d]"} inline-flex min-h-11 items-center gap-2 rounded-lg px-4 font-black`} key={option} type="button" onClick={() => { setType(option); setPage(1); }}>
                <Filter size={15} /> {option === "all" ? "All" : option === "image" ? "Photos" : "GIFs"}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]"><Loader2 className="animate-spin" /> Loading gallery</div>
      ) : (
        <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.15fr_.85fr_1fr]">
          {visibleItems.map((item, index) => (
            <article className={`group relative min-h-[250px] overflow-hidden rounded-lg border border-white/20 bg-[#0a211d] ${index % 4 === 0 || index % 4 === 3 ? "xl:row-span-2" : ""}`} key={item.id}>
              {item.type === "gif" && <span className="absolute right-4 top-4 z-10 rounded-full bg-[#ffd35e] px-3 py-1 text-xs font-black text-[#10201d]">Animated</span>}
              <img className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" src={item.src} alt={item.title} />
              <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/20 bg-[#10201d]/85 p-4 backdrop-blur">
                <span className="text-xs font-black uppercase text-[#e0a93f]">{item.type === "gif" ? "GIF" : "Photo"}</span>
                <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-6 text-white/75">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {!preview && <Pagination page={page} totalPages={totalPages} setPage={setPage} dark />}
      {preview && <Link className="mt-7 inline-flex font-black text-[#c8efe2]" href="/gallery">Open full gallery</Link>}
    </section>
  );
}

export function ExpertsSection({ preview = false }) {
  const [experts] = useState(content.experts || []);
  const [loading] = useState(false);
  const [role, setRole] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const roles = ["all", ...Array.from(new Set(experts.map((expert) => expert.role)))];
  const filtered = experts.filter((expert) => {
    const matchesRole = role === "all" || expert.role === role;
    const matchesQuery = `${expert.name} ${expert.role} ${expert.specialty}`.toLowerCase().includes(query.toLowerCase());
    return matchesRole && matchesQuery;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleExperts = preview ? experts.slice(0, 3) : filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className={section} id="experts">
      <div className={`${sectionHead} max-w-2xl`}>
        <span className={eyebrow}><Award size={16} /> Experts</span>
        <h2 className={sectionTitle}>Trusted professionals for every kind of care.</h2>
        <p className={sectionText}>Experts are pulled from the content store and displayed with filters for easy discovery.</p>
      </div>

      {!preview && (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className={inputShell}><Search size={16} /><input className="w-full bg-transparent outline-none" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search experts" /></label>
          <select className="min-h-12 rounded-lg border border-[#dce8e3] bg-white px-4 text-[#10201d] outline-none md:w-72" value={role} onChange={(event) => { setRole(event.target.value); setPage(1); }}>
            {roles.map((option) => <option value={option} key={option}>{option === "all" ? "All roles" : option}</option>)}
          </select>
        </div>
      )}

      {loading ? (
        <div className="flex min-h-44 items-center justify-center gap-3 rounded-lg bg-white text-[#10201d]"><Loader2 className="animate-spin" /> Loading experts</div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleExperts.map((expert) => (
            <article className={card} key={expert.id}>
              <img className="aspect-[4/3] w-full object-cover object-top" src={expert.image} alt={expert.name} />
              <div className="p-5">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#e0a93f]"><Sparkles size={14} /> {expert.experience}</span>
                <h3 className="mt-3 text-2xl font-black text-[#10201d]">{expert.name}</h3>
                <p className="mt-1 font-black text-[#096454]">{expert.role}</p>
                <p className="mt-3 leading-7 text-[#63706d]">{expert.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {!preview && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
      {preview && <Link className="mt-7 inline-flex font-black text-[#096454]" href="/experts">View all experts</Link>}
    </section>
  );
}

function Pagination({ page, totalPages, setPage, dark = false }) {
  return (
    <div className={`mt-8 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center ${dark ? "text-white" : "text-[#10201d]"}`}>
      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 font-black text-[#10201d] disabled:opacity-45" type="button" disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
        <ChevronLeft size={17} /> Prev
      </button>
      <span className="text-center font-black opacity-75">Page {page} of {totalPages}</span>
      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 font-black text-[#10201d] disabled:opacity-45" type="button" disabled={page === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>
        Next <ChevronRight size={17} />
      </button>
    </div>
  );
}
