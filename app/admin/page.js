import Link from "next/link";
import { HeartPulse, ImagePlus, UserPlus } from "lucide-react";

export default function AdminHome() {
  return (
    <main className="admin-shell">
      <Link className="brand" href="/"><HeartPulse /> Heal Boxx</Link>
      <section className="admin-hero">
        <span className="eyebrow">Admin dashboard</span>
        <h1>Manage dynamic website content.</h1>
        <p>Add gallery media and expert profiles from here. The homepage will fetch the latest saved data through API routes.</p>
        <div className="admin-links">
          <Link href="/admin/gallery"><ImagePlus /> Add gallery media</Link>
          <Link href="/admin/experts"><UserPlus /> Add expert</Link>
        </div>
      </section>
    </main>
  );
}
