"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Loader2 } from "lucide-react";

export default function StudentRegistrationsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/student-registrations")
      .then((response) => response.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="admin-panel registrations-panel">
      <div className="admin-list-head">
        <div>
          <span className="eyebrow"><GraduationCap size={16} /> Student requests</span>
          <h1>{items.length} student registrations</h1>
        </div>
      </div>

      {loading ? (
        <div className="loading"><Loader2 className="spin" /> Loading student registrations</div>
      ) : (
        <div className="registration-list">
          {items.map((item) => (
            <article className="registration-card" key={item.id}>
              <div>
                <h3>{item.studentName}</h3>
                <p>{item.collegeName}</p>
              </div>
              <dl>
                <div><dt>Phone</dt><dd>{item.phone}</dd></div>
                <div><dt>Submitted</dt><dd>{new Date(item.createdAt).toLocaleString()}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
