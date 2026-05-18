"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Award, ChevronLeft, ChevronRight, Filter, ImageIcon, Loader2, Search, Sparkles } from "lucide-react";
import content from "@/data/content.json";

const pageSize = 6;

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
    <section className="section gallery-band" id="gallery">
      <div className="section-head">
        <span className="eyebrow"><ImageIcon size={16} /> Gallery</span>
        <h2>Moments that feel calm, human and hopeful.</h2>
        <p>These photos and GIFs are loaded from the backend store, so the page stays flexible without hardcoded cards.</p>
      </div>

      {!preview && (
        <div className="filter-bar dark-filter">
          <label><Search size={16} /><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search gallery" /></label>
          <div className="segmented">
            {["all", "image", "gif"].map((option) => (
              <button className={type === option ? "active" : ""} key={option} type="button" onClick={() => { setType(option); setPage(1); }}>
                <Filter size={15} /> {option === "all" ? "All" : option === "image" ? "Photos" : "GIFs"}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="loading"><Loader2 className="spin" /> Loading gallery</div>
      ) : (
        <div className="gallery-grid">
          {visibleItems.map((item, index) => (
            <article className={`gallery-card gallery-card-${index % 4} reveal-card ${item.type === "gif" ? "gif-card" : ""}`} key={item.id}>
              <img src={item.src} alt={item.title} />
              <div>
                <span>{item.type === "gif" ? "GIF" : "Photo"}</span>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {!preview && <Pagination page={page} totalPages={totalPages} setPage={setPage} dark />}
      {preview && <Link className="section-link light" href="/gallery">Open full gallery</Link>}
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
    <section className="section" id="experts">
      <div className="section-head compact">
        <span className="eyebrow"><Award size={16} /> Experts</span>
        <h2>Trusted professionals for every kind of care.</h2>
        <p>Experts are pulled from the backend store and displayed with filters for easy discovery.</p>
      </div>

      {!preview && (
        <div className="filter-bar">
          <label><Search size={16} /><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search experts" /></label>
          <select value={role} onChange={(event) => { setRole(event.target.value); setPage(1); }}>
            {roles.map((option) => <option value={option} key={option}>{option === "all" ? "All roles" : option}</option>)}
          </select>
        </div>
      )}

      {loading ? (
        <div className="loading"><Loader2 className="spin" /> Loading experts</div>
      ) : (
        <div className="experts-grid">
          {visibleExperts.map((expert) => (
            <article className="expert-card reveal-card" key={expert.id}>
              <img src={expert.image} alt={expert.name} />
              <div className="expert-body">
                <span><Sparkles size={14} /> {expert.experience}</span>
                <h3>{expert.name}</h3>
                <p className="role">{expert.role}</p>
                <p>{expert.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      )}
      {!preview && <Pagination page={page} totalPages={totalPages} setPage={setPage} />}
      {preview && <Link className="section-link" href="/experts">View all experts</Link>}
    </section>
  );
}

function Pagination({ page, totalPages, setPage, dark = false }) {
  return (
    <div className={`pagination ${dark ? "dark-pagination" : ""}`}>
      <button type="button" disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
        <ChevronLeft size={17} /> Prev
      </button>
      <span>Page {page} of {totalPages}</span>
      <button type="button" disabled={page === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>
        Next <ChevronRight size={17} />
      </button>
    </div>
  );
}
