"use client";

import { useEffect } from "react";
import { ExternalLink, FileBadge2 } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const professionalRegisterUrl = "https://healboxx-register-doctor.healboxx.com/";

export default function RegisterPage() {
  useEffect(() => {
    window.location.replace(professionalRegisterUrl);
  }, []);

  return (
    <main>
      <SiteHeader />
      <section className="grid min-h-[68vh] place-items-center bg-[#f8fffc] px-4 py-16 text-[#10201d] sm:px-6 md:px-10">
        <div className="w-full max-w-xl rounded-lg border border-[#dce8e3] bg-white p-6 text-center shadow-[0_24px_70px_rgba(16,32,29,.12)] sm:p-8">
          <FileBadge2 className="mx-auto h-14 w-14 rounded-lg bg-[#10201d] p-3 text-[#35d7ee]" />
          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">Opening professional registration.</h1>
          <p className="mt-4 leading-7 text-[#63706d]">
            You are being redirected to the HealBoxx professional registration portal.
          </p>
          <a
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#ffd35e] px-5 font-black text-[#10201d]"
            href={professionalRegisterUrl}
          >
            Open registration <ExternalLink size={18} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
