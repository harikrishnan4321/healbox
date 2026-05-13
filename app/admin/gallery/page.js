import Link from "next/link";
import AdminForm from "@/components/AdminForm";

export default function GalleryAdmin() {
  return (
    <main className="admin-shell">
      <Link href="/" className="back-link">Back to website</Link>
      <AdminForm mode="gallery" />
    </main>
  );
}
