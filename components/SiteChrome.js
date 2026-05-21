"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  ChevronDown,
  FileBadge2,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/corporate-eap", label: "Corporate and EAP session" },
  { href: "/experts", label: "Experts" },
  { href: "/hello", label: "Hello" },
  { href: "/blog", label: "Blog" },
];

const navLink =
  "relative flex w-full min-h-11 items-center rounded-lg px-3 py-2 text-sm font-black leading-tight text-white/90 transition hover:bg-white/10 hover:text-[#ffd35e] xl:w-auto";

const activeLink = "bg-white/15 text-[#ffd35e]";

const mobileNavLink =
  "flex min-h-12 w-full items-center justify-between rounded-2xl border border-[#dce8e3] bg-white px-4 py-3 text-[15px] font-black leading-tight text-[#10201d] shadow-[0_10px_26px_rgba(16,32,29,.08)] transition active:scale-[.99]";

const mobileActiveLink =
  "border-[#0f8d7a]/30 bg-[#d8f3e8] text-[#075f51]";

const ctaLink =
  "inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/15 px-4 text-xs font-black text-white shadow-[inset_0_1px_rgba(255,255,255,.18)] transition hover:bg-white/25";

export function SiteHeader() {
  const pathname = usePathname();

  function closeMenu() {
    const toggle = document.getElementById("site-menu-toggle");
    if (toggle) {
      toggle.checked = false;
    }
  }

  return (
    <>
      <input
        className="peer/site-menu sr-only"
        id="site-menu-toggle"
        type="checkbox"
        aria-hidden="true"
      />

      {/* HEADER */}
      <header className="sticky top-0 z-[90] flex min-h-[70px] items-center justify-between gap-3 border-b border-white/15 bg-[#08231f]/95 px-4 py-3 text-white shadow-[0_18px_70px_rgba(4,16,14,.28)] backdrop-blur-2xl transition sm:px-5 md:px-8 lg:grid lg:min-h-[76px] lg:grid-cols-[170px_1fr_auto] lg:px-10 xl:grid-cols-[190px_1fr_auto] xl:px-14">
        
        {/* LOGO */}
        <Link
          className="inline-flex shrink-0 items-center"
          href="/"
          onClick={closeMenu}
        >
          <img
            className="h-11 w-[136px] object-contain sm:h-12 sm:w-[150px]"
            src="/logo.png"
            alt="HealBoxx"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden min-w-0 items-center justify-center gap-1 lg:flex xl:gap-2">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${navLink} ${
                pathname === item.href ? activeLink : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* GALLERY DROPDOWN */}
          <div className="relative group">
            <Link
              href="/gallery"
              onClick={closeMenu}
              className={`${navLink} ${
                pathname.startsWith("/gallery") ? activeLink : ""
              } justify-between`}
            >
              Gallery <ChevronDown size={15} />
            </Link>

            <div className="invisible absolute left-0 top-full mt-2 hidden min-w-[220px] gap-2 rounded-3xl border border-white/15 bg-[#10201d]/95 p-3 opacity-0 transition duration-200 group-hover:visible group-hover:block group-hover:opacity-100">
              <Link
                className={navLink}
                href="/gallery"
                onClick={closeMenu}
              >
                All gallery
              </Link>

              <Link
                className={navLink}
                href="/gallery?type=image"
                onClick={closeMenu}
              >
                Photos
              </Link>

              <Link
                className={navLink}
                href="/gallery?type=gif"
                onClick={closeMenu}
              >
                Videos/GIFs
              </Link>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${navLink} ${
                pathname === item.href ? activeLink : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link className={ctaLink} href="/register">
            <FileBadge2 className="text-[#35d7ee]" />

            <span className="grid leading-tight">
              Professional
              <strong className="text-sm text-[#ffb21e]">
                Register
              </strong>
            </span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <label
          htmlFor="site-menu-toggle"
          aria-label="Toggle menu"
          className="relative z-[120] grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#dce8e3] bg-white text-[#10201d] transition active:scale-95 lg:hidden"
        >
          <Menu className="block peer-checked/site-menu:hidden" size={22} />
          <X className="hidden peer-checked/site-menu:block" size={22} />
        </label>
      </header>

      {/* MOBILE NAV */}
      <nav
  className="
    invisible fixed right-3 top-[78px]
    z-[110]
    max-h-[calc(100vh-92px)]
    w-[92%]
    -translate-y-3
    overflow-y-auto
    rounded-[28px]
    border border-white/70
    bg-[#f8fffc]
    p-4
    text-[#10201d]
    opacity-0
    shadow-[0_28px_90px_rgba(4,16,14,.38)]
    transition-all duration-200 ease-out
    peer-checked/site-menu:visible
    peer-checked/site-menu:translate-y-0
    peer-checked/site-menu:opacity-100
    sm:w-[55%]
    md:w-[50%]
    lg:hidden
  "
>
         

        <div className="grid gap-3">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${mobileNavLink} ${
                pathname === item.href ? mobileActiveLink : ""
              }`}
            >
              <span>{item.label}</span>
              <ChevronDown className="-rotate-90 text-[#0f8d7a]" size={15} />
            </Link>
          ))}

          {/* MOBILE GALLERY */}
          <details className="group overflow-hidden rounded-3xl border border-[#dce8e3] bg-white shadow-[0_10px_26px_rgba(16,32,29,.08)]">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 py-3 text-[15px] font-black text-[#10201d]">
              <span>Gallery</span>
              <ChevronDown
                size={15}
                className="text-[#0f8d7a] transition group-open:rotate-180"
              />
            </summary>

            <div className="grid gap-2 border-t border-[#dce8e3] bg-[#f2fbf7] p-3">
              <Link
                className="rounded-2xl px-4 py-3 font-black text-[#10201d] transition active:bg-[#d8f3e8]"
                href="/gallery"
                onClick={closeMenu}
              >
                All gallery
              </Link>

              <Link
                className="rounded-2xl px-4 py-3 font-black text-[#10201d] transition active:bg-[#d8f3e8]"
                href="/gallery?type=image"
                onClick={closeMenu}
              >
                Photos
              </Link>

              <Link
                className="rounded-2xl px-4 py-3 font-black text-[#10201d] transition active:bg-[#d8f3e8]"
                href="/gallery?type=gif"
                onClick={closeMenu}
              >
                Videos/GIFs
              </Link>
            </div>
          </details>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${mobileNavLink} ${
                pathname === item.href ? mobileActiveLink : ""
              }`}
            >
              <span>{item.label}</span>
              <ChevronDown className="-rotate-90 text-[#0f8d7a]" size={15} />
            </Link>
          ))}

          {/* MOBILE CTA */}
          <Link
            href="/register"
            onClick={closeMenu}
            className="mt-1 flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd35e] px-4 py-3 text-center font-black text-[#10201d] shadow-[0_12px_28px_rgba(255,211,94,.35)]"
          >
            Register Professional
          </Link>
        </div>
      </nav>

      {/* OVERLAY */}
      <label
        htmlFor="site-menu-toggle"
        aria-label="Close menu"
        className="fixed inset-0 z-[80] hidden bg-[#07110f]/50 backdrop-blur-sm peer-checked/site-menu:block lg:hidden"
      />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="grid gap-8 bg-[#0d1715] px-5 py-12 text-white sm:px-6 md:grid-cols-[1.2fr_.6fr_.6fr] md:px-14 md:py-14">
      <div className="grid content-start gap-3">
        <Link className="inline-flex" href="/">
          <img
            className="h-12 w-[150px] object-contain"
            src="/logo.png"
            alt="HealBoxx"
          />
        </Link>

        <p className="max-w-md text-base leading-7 text-white/70">
          Your one-stop solution for mental health, therapy, coaching and
          wellness.
        </p>
      </div>

      <div className="grid content-start gap-2">
        <h3 className="mb-2 text-xl font-black">Pages</h3>

        {[
          "About Us",
          "Services",
          "Gallery",
          "Corporate and EAP",
          "Experts",
          "Hello",
          "Blog",
        ].map((label, index) => (
          <Link
            className="text-white/75 transition hover:text-[#ffd35e]"
            href={[
              "/about",
              "/services",
              "/gallery",
              "/corporate-eap",
              "/experts",
              "/hello",
              "/blog",
            ][index]}
            key={label}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="grid content-start gap-2">
        <h3 className="mb-2 text-xl font-black">Connect</h3>
        <Link
          className="text-white/75 transition hover:text-[#ffd35e]"
          href="/register"
        >
          Professional Register
        </Link>
        <Link
          className="text-white/75 transition hover:text-[#ffd35e]"
          href="/hello"
        >
          Contact HealBoxx
        </Link>
        <Link
          className="text-white/75 transition hover:text-[#ffd35e]"
          href="/corporate-eap"
        >
          Corporate Wellness
        </Link>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative grid min-h-[430px] items-center gap-8 overflow-hidden bg-[#07110f] px-5 py-14 text-white sm:px-6 md:min-h-[520px] md:grid-cols-[.9fr_.7fr] md:px-14 md:py-16">
      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#9debdc]">
          {eyebrow}
        </span>

        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-[1.02] sm:text-5xl md:text-7xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          {text}
        </p>
      </div>

      {image && (
        <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
          <img
            className="aspect-[16/10] max-h-[430px] w-full object-cover"
            src={image}
            alt={title}
          />
          <span className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-gradient-to-r from-[#32d8c7] via-[#ffd35e] to-transparent" />
        </div>
      )}
    </section>
  );
}

export function ProfessionalStrip() {
  return (
    <section className="flex flex-col gap-4 bg-[#10201d] px-5 py-5 text-white sm:px-6 md:flex-row md:items-center md:justify-between md:px-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <BriefcaseBusiness className="shrink-0 text-[#35d7ee]" />
        <span className="font-black text-[#ffd35e]">
          Are you a professional?
        </span>
        <strong className="font-bold text-white/85">
          Join HealBoxx and support more people with trusted care.
        </strong>
      </div>

      <Link
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ffd35e] px-5 font-black text-[#10201d] md:shrink-0"
        href="/register"
      >
        Register Here
      </Link>
    </section>
  );
}
