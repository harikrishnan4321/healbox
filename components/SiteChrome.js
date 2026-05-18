"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, ChevronDown, FileBadge2, GraduationCap, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/corporate-eap", label: "Corporate and EAP session" },
  { href: "/experts", label: "Experts" },
  { href: "/hello", label: "Hello" },
  { href: "/blog", label: "Blog" }
];

const navLink = "relative flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-black text-white/90 transition hover:bg-white/10 hover:text-[#ffd35e]";
const activeLink = "bg-white/15 text-[#ffd35e]";
const ctaLink = "hidden min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/15 px-4 text-xs font-black text-white shadow-[inset_0_1px_rgba(255,255,255,.18)] transition hover:bg-white/25 xl:flex";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 grid min-h-[74px] grid-cols-[1fr_auto] items-center gap-4 border-b border-white/15 bg-[#08231f]/95 px-4 text-white shadow-[0_18px_70px_rgba(4,16,14,.28)] backdrop-blur-2xl md:px-8 xl:grid-cols-[190px_1fr_auto] xl:px-14">
        <Link className="inline-flex items-center" href="/" onClick={closeMenu}>
          <img className="h-12 w-[150px] object-contain" src="/logo.png" alt="HealBoxx" />
        </Link>

        <nav className={`${open ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"} fixed right-4 top-[84px] z-50 grid max-h-[calc(100vh-96px)] w-[min(390px,calc(100vw-32px))] gap-2 overflow-y-auto rounded-lg border border-white/20 bg-gradient-to-br from-[#10201d] to-[#096454] p-4 shadow-2xl transition xl:pointer-events-auto xl:visible xl:static xl:flex xl:w-auto xl:translate-y-0 xl:items-center xl:justify-center xl:gap-5 xl:overflow-visible xl:border-0 xl:bg-none xl:p-0 xl:opacity-100 xl:shadow-none`}>
          {navItems.slice(0, 2).map((item) => (
            <Link className={`${navLink} ${pathname === item.href ? activeLink : ""}`} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <div className="group relative">
            <Link className={`${navLink} ${pathname === "/gallery" ? activeLink : ""}`} href="/gallery" onClick={closeMenu}>Gallery <ChevronDown size={15} /></Link>
            <div className="mt-2 grid gap-1 rounded-lg border border-white/15 bg-white/10 p-2 xl:invisible xl:absolute xl:left-0 xl:top-full xl:mt-0 xl:min-w-44 xl:bg-[#10201d]/95 xl:opacity-0 xl:shadow-xl xl:transition xl:group-hover:visible xl:group-hover:opacity-100">
              <Link className={navLink} href="/gallery?type=image" onClick={closeMenu}>Photos</Link>
              <Link className={navLink} href="/gallery?type=gif" onClick={closeMenu}>Videos/GIFs</Link>
            </div>
          </div>
          {navItems.slice(2).map((item) => (
            <Link className={`${navLink} ${pathname === item.href ? activeLink : ""}`} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link className="flex min-h-11 items-center justify-center rounded-lg bg-[#ffd35e] px-3 font-black text-[#10201d] xl:hidden" href="/register" onClick={closeMenu}>Register Professional</Link>
          <Link className="flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/15 px-3 font-black text-white xl:hidden" href="/student-registration" onClick={closeMenu}>Student Registration</Link>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link className={ctaLink} href="/student-registration">
            <GraduationCap className="text-[#35d7ee]" />
            <span className="grid leading-tight">Student<strong className="text-sm text-[#ffb21e]">Register</strong></span>
          </Link>
          <Link className={ctaLink} href="/register">
            <FileBadge2 className="text-[#35d7ee]" />
            <span className="grid leading-tight">Professional<strong className="text-sm text-[#ffb21e]">Register</strong></span>
          </Link>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-lg border border-[#dce8e3] bg-white text-[#10201d] xl:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && <button className="fixed inset-0 z-40 bg-[#07110f]/50 xl:hidden" aria-label="Close menu" onClick={closeMenu} />}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="grid gap-8 bg-[#0d1715] px-5 py-14 text-white md:grid-cols-[1.2fr_.6fr_.6fr] md:px-14">
      <div className="grid content-start gap-3">
        <Link className="inline-flex" href="/"><img className="h-12 w-[150px] object-contain" src="/logo.png" alt="HealBoxx" /></Link>
        <p className="max-w-md text-base leading-7 text-white/70">Your one-stop solution for mental health, therapy, coaching and wellness.</p>
      </div>
      <div className="grid content-start gap-2">
        <h3 className="mb-2 text-xl font-black">Pages</h3>
        {["About Us", "Services", "Gallery", "Corporate and EAP", "Experts", "Hello", "Blog"].map((label, index) => (
          <Link className="text-white/75 transition hover:text-[#ffd35e]" href={["/about", "/services", "/gallery", "/corporate-eap", "/experts", "/hello", "/blog"][index]} key={label}>{label}</Link>
        ))}
      </div>
      <div className="grid content-start gap-2">
        <h3 className="mb-2 text-xl font-black">Connect</h3>
        <Link className="text-white/75 transition hover:text-[#ffd35e]" href="/register">Professional Register</Link>
        <Link className="text-white/75 transition hover:text-[#ffd35e]" href="/student-registration">Student Registration</Link>
        <Link className="text-white/75 transition hover:text-[#ffd35e]" href="/hello">Contact HealBoxx</Link>
        <Link className="text-white/75 transition hover:text-[#ffd35e]" href="/corporate-eap">Corporate Wellness</Link>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative grid min-h-[520px] items-center gap-8 overflow-hidden bg-[#07110f] px-5 py-16 text-white md:grid-cols-[.9fr_.7fr] md:px-14">
      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#9debdc]">{eyebrow}</span>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-none md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{text}</p>
      </div>
      {image && (
        <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
          <img className="aspect-[16/10] max-h-[430px] w-full object-cover" src={image} alt={title} />
          <span className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-gradient-to-r from-[#32d8c7] via-[#ffd35e] to-transparent" />
        </div>
      )}
    </section>
  );
}

export function ProfessionalStrip() {
  return (
    <section className="flex flex-col gap-4 bg-[#10201d] px-5 py-5 text-white md:flex-row md:items-center md:justify-between md:px-14">
      <div className="flex flex-wrap items-center gap-3">
        <BriefcaseBusiness className="text-[#35d7ee]" />
        <span className="font-black text-[#ffd35e]">Are you a professional?</span>
        <strong className="font-bold text-white/85">Join HealBoxx and support more people with trusted care.</strong>
      </div>
      <Link className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ffd35e] px-5 font-black text-[#10201d]" href="/register">Register Here</Link>
    </section>
  );
}
