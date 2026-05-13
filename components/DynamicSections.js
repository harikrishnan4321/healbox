"use client";

import { useEffect, useState } from "react";
import { Award, ImageIcon, Loader2, Sparkles } from "lucide-react";

export function GallerySection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section gallery-band" id="gallery">
      <div className="section-head">
        <span className="eyebrow"><ImageIcon size={16} /> Gallery</span>
        <h2>Moments that feel calm, human and hopeful.</h2>
        <p>These photos and GIFs are loaded from the backend store, so admin updates show here without editing the page.</p>
      </div>

      {loading ? (
        <div className="loading"><Loader2 className="spin" /> Loading gallery</div>
      ) : (
        <div className="gallery-grid">
          {items.map((item, index) => (
            <article className={`gallery-card gallery-card-${index % 4}`} key={item.id}>
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
    </section>
  );
}

export function ExpertsSection() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/experts")
      .then((res) => res.json())
      .then(setExperts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section" id="experts">
      <div className="section-head compact">
        <span className="eyebrow"><Award size={16} /> Experts</span>
        <h2>Trusted professionals, added from admin.</h2>
        <p>Experts are pulled from `/api/experts`, ready to connect with a real admin panel or database later.</p>
      </div>

      {loading ? (
        <div className="loading"><Loader2 className="spin" /> Loading experts</div>
      ) : (
        <div className="experts-grid">
          {experts.map((expert) => (
            <article className="expert-card" key={expert.id}>
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
    </section>
  );
}
