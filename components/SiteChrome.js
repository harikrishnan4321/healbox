"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, ChevronDown, FileBadge2, GraduationCap, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/corporate-eap", label: "Corporate & EAP" },
  { href: "/experts", label: "Experts" },
  { href: "/hello", label: "Hello" },
  { href: "/blog", label: "Blog" }
];

const desktopLink =
  "inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 py-2 text-[13px] font-black leading-tight tracking-[0.01em] text-white/90 transition hover:bg-white/10 hover:text-[#ffd35e] 2xl:px-3 2xl:text-sm";
const activeDesktop = "bg-white/12 text-[#ffd35e]";
const mobileLink =
  "flex min-h-12 w-full items-center justify-between rounded-2xl border border-[#dce8e3] bg-white px-4 py-3 text-[15px] font-black leading-tight text-[#10201d] shadow-[0_10px_26px_rgba(16,32,29,.08)] transition active:scale-[.99]";
const activeMobile = "border-[#0f8d7a]/30 bg-[#d8f3e8] text-[#075f51]";

function WhatsAppIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.8l6.6-1.7A12.7 12.7 0 1 0 16 3.2Zm0 23.3c-2 0-3.8-.5-5.5-1.5l-.4-.2-3.9 1 1-3.8-.3-.4a10.5 10.5 0 1 1 9.1 4.9Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 2 .7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"
      />
    </svg>
  );
}

function NavLink({ href, label, pathname, onClick, mobile = false }) {
  const active = pathname === href;
  return (
    <Link
      className={mobile ? `${mobileLink} ${active ? activeMobile : ""}` : `${desktopLink} ${active ? activeDesktop : ""}`}
      href={href}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-[90] grid min-h-[74px] w-full max-w-full grid-cols-[1fr_auto] items-center gap-3 border-b border-white/15 bg-[#08231f]/95 px-4 py-3 text-white shadow-[0_18px_70px_rgba(4,16,14,.28)] backdrop-blur-2xl sm:px-5 md:px-8 xl:grid-cols-[150px_minmax(0,1fr)_auto] xl:px-10 2xl:grid-cols-[180px_minmax(0,1fr)_auto] 2xl:px-14">
        <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[#32d8c7] to-transparent opacity-80 md:inset-x-8" />

        <Link className="inline-flex min-w-0 items-center" href="/">
          <img className="h-11 w-[142px] object-contain sm:h-12 sm:w-[154px]" src="/logo.png" alt="HealBoxx" />
        </Link>

        <nav className="hidden min-w-0 flex-wrap items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {navItems.slice(0, 2).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}

          <div className="group relative">
            <Link className={`${desktopLink} ${pathname.startsWith("/gallery") ? activeDesktop : ""}`} href="/gallery">
              Gallery <ChevronDown size={15} />
            </Link>
            <div className="invisible absolute left-0 top-[calc(100%+10px)] grid min-w-[190px] translate-y-2 gap-1 rounded-lg border border-white/15 bg-[#10201d]/98 p-2 opacity-0 shadow-[0_24px_70px_rgba(4,16,14,.35)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {[
                ["All gallery", "/gallery"],
                ["Photos", "/gallery?type=image"],
                ["Videos/GIFs", "/gallery?type=gif"]
              ].map(([label, href]) => (
                <Link className="rounded-lg px-3 py-2 text-sm font-black text-white/80 transition hover:bg-white/10 hover:text-[#ffd35e]" href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/15 px-3 text-xs font-black text-white shadow-[inset_0_1px_rgba(255,255,255,.18)] transition hover:bg-white/25 2xl:px-4"
            href="/register"
          >
            <FileBadge2 className="h-5 w-5 text-[#35d7ee]" />
            <span className="grid leading-tight">Professional<strong className="text-[#ffb21e]">Register</strong></span>
          </Link>
          <Link
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#ffd35e] px-3 text-xs font-black text-[#10201d] shadow-lg transition hover:bg-[#ffe08a] 2xl:px-4"
            href="/student-registration"
          >
            <GraduationCap className="h-5 w-5" />
            <span className="grid leading-tight">Student<strong>Register</strong></span>
          </Link>
        </div>

        <details className="group xl:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-lg border border-[#dce8e3] bg-white text-[#10201d] transition active:scale-95 [&::-webkit-details-marker]:hidden" aria-label="Menu">
            <Menu className="group-open:hidden" />
            <X className="hidden group-open:block" />
          </summary>

          <nav className="fixed inset-x-3 top-[82px] z-[110] max-h-[calc(100vh-96px)] overflow-y-auto rounded-[24px] border border-white/70 bg-[#f8fffc] p-3 text-[#10201d] shadow-[0_28px_90px_rgba(4,16,14,.38)] sm:left-auto sm:right-5 sm:w-[min(420px,calc(100vw-40px))] sm:p-4">
            <div className="grid gap-2">
              {navItems.slice(0, 2).map((item) => (
                <NavLink key={item.href} {...item} pathname={pathname} mobile />
              ))}

              <details className="rounded-2xl border border-[#dce8e3] bg-white shadow-[0_10px_26px_rgba(16,32,29,.08)]" open={pathname.startsWith("/gallery")}>
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 py-3 text-[15px] font-black [&::-webkit-details-marker]:hidden">
                  Gallery <ChevronDown size={16} />
                </summary>
                <div className="grid gap-1 border-t border-[#e5efeb] bg-[#f2fbf7] p-2">
                  {[
                    ["All gallery", "/gallery"],
                    ["Photos", "/gallery?type=image"],
                    ["Videos/GIFs", "/gallery?type=gif"]
                  ].map(([label, href]) => (
                    <Link className="rounded-xl px-3 py-2 text-sm font-black text-[#096454]" href={href} key={href}>
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              {navItems.slice(2).map((item) => (
                <NavLink key={item.href} {...item} pathname={pathname} mobile />
              ))}

              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <Link className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#ffd35e] px-4 py-3 text-[15px] font-black text-[#10201d] shadow-lg" href="/register">
                  Professional Register
                </Link>
                <Link className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#10201d] px-4 py-3 text-[15px] font-black text-white shadow-lg" href="/student-registration">
                  Student Register
                </Link>
              </div>
            </div>
          </nav>
        </details>
      </header>
    </>
  );
}

export function SiteFooter() {
  const socials = [
    ["X", "https://twitter.com/healboxx"],
    ["FB", "https://www.facebook.com/healboxx"],
    ["IG", "https://www.instagram.com/healboxx/"],
    ["YT", "https://www.youtube.com/@healboxx"]
  ];

  return (
    <>
      <footer className="grid w-full max-w-full gap-8 overflow-hidden bg-[#0d1715] px-4 py-12 text-white sm:px-6 md:px-10 lg:grid-cols-[1.2fr_.6fr_.7fr] lg:px-14">
        <div className="grid content-start gap-4">
          <Link className="inline-flex" href="/">
            <img className="h-12 w-[155px] object-contain" src="/logo.png" alt="HealBoxx" />
          </Link>
          <p className="max-w-md leading-7 text-white/72">Your one-stop solution for mental health, therapy, coaching and wellness.</p>
          <div className="flex flex-wrap gap-2">
            {socials.map(([label, href]) => (
              <a className="inline-grid min-h-11 min-w-11 place-items-center rounded-full border border-white/15 bg-white/10 px-3 text-sm font-black text-white/80 transition hover:bg-[#ffd35e] hover:text-[#10201d]" href={href} key={label} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid content-start gap-3">
          <h3 className="text-xl font-black">Pages</h3>
          {[
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Gallery", "/gallery"],
            ["Corporate & EAP", "/corporate-eap"],
            ["Experts", "/experts"],
            ["Student Registration", "/student-registration"],
            ["Hello", "/hello"],
            ["Blog", "/blog"]
          ].map(([label, href]) => (
            <Link className="text-white/72 transition hover:text-[#ffd35e]" href={href} key={href}>{label}</Link>
          ))}
        </div>
        <div className="grid content-start gap-3">
          <h3 className="text-xl font-black">Connect</h3>
          <Link className="text-white/72 transition hover:text-[#ffd35e]" href="/register">Professional Register</Link>
          <Link className="text-white/72 transition hover:text-[#ffd35e]" href="/student-registration">Student Register</Link>
          <Link className="text-white/72 transition hover:text-[#ffd35e]" href="/hello">Contact HealBoxx</Link>
          <Link className="text-white/72 transition hover:text-[#ffd35e]" href="/corporate-eap">Corporate Wellness</Link>
          <a className="mt-1 inline-flex min-h-11 w-fit items-center gap-2 rounded-lg bg-[#25d366] px-4 text-sm font-black text-[#07110f] shadow-lg" href="https://wa.me/917200045559" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
          </a>
        </div>
      </footer>

      <a className="fixed bottom-5 right-5 z-[130] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,.42)] ring-4 ring-white transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-[58px] sm:w-[58px]" href="https://wa.me/917200045559" target="_blank" rel="noreferrer" aria-label="Chat with HealBoxx on WhatsApp">
        <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" />
      </a>
    </>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative grid min-h-[auto] w-full max-w-full grid-cols-1 items-center gap-8 overflow-hidden bg-[#07110f] px-4 py-14 text-white sm:px-6 md:px-10 md:py-16 lg:min-h-[560px] lg:grid-cols-[minmax(0,.92fr)_minmax(300px,.72fr)] lg:px-14 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,15,13,.78),transparent_54%,rgba(5,15,13,.45)),radial-gradient(circle_at_18%_20%,rgba(50,216,199,.22),transparent_34%),linear-gradient(135deg,rgba(5,15,13,.92),rgba(9,100,84,.66))]" />
      <div className="relative z-10 min-w-0">
        <span className="inline-flex gap-2 text-xs font-black uppercase tracking-[.08em] text-[#9debdc]">{eyebrow}</span>
        <h1 className="mt-4 max-w-[820px] text-balance text-4xl font-black leading-[.98] text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
        <p className="mt-6 max-w-[660px] text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{text}</p>
      </div>
      {image && (
        <div className="relative z-10 overflow-hidden rounded-lg shadow-[0_28px_80px_rgba(0,0,0,.32)]">
          <img className="aspect-[16/10] max-h-[430px] w-full object-cover animate-[cinematicZoom_12s_ease-in-out_infinite_alternate]" src={image} alt={title} />
          <span className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-gradient-to-r from-[#32d8c7] via-[#ffd35e] to-transparent animate-[heroLine_2.8s_ease-in-out_infinite]" />
        </div>
      )}
    </section>
  );
}

export function ProfessionalStrip() {
  return (
    <section className="flex w-full max-w-full flex-col items-start justify-between gap-4 bg-[#10201d] px-4 py-5 text-white sm:px-6 md:px-10 lg:flex-row lg:items-center lg:px-14">
      <div className="flex min-w-0 flex-wrap items-center gap-3">
        <BriefcaseBusiness className="text-[#35d7ee]" />
        <span className="font-black text-[#ffd35e]">Are you a professional?</span>
        <strong className="text-white/88">Join HealBoxx and support more people with trusted care.</strong>
      </div>
      <Link className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#ffd35e] px-4 font-black text-[#10201d]" href="/register">
        Register Here
      </Link>
    </section>
  );
}
