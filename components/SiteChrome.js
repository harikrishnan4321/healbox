"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BriefcaseBusiness, ChevronDown, FileBadge2, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/corporate-eap", label: "Corporate & EAP" },
  { href: "/experts", label: "Experts" },
  { href: "/hello", label: "Hello" },
  { href: "/blog", label: "Blog" }
];

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.8l6.6-1.7A12.7 12.7 0 1 0 16 3.2Zm0 23.3c-2 0-3.8-.5-5.5-1.5l-.4-.2-3.9 1 1-3.8-.3-.4a10.5 10.5 0 1 1 9.1 4.9Zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 2 .7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4Z"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="nav premium-nav">
        <Link className="brand logo-brand" href="/" onClick={closeMenu}>
          <img src="/logo.png" alt="HealBoxx" />
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.slice(0, 2).map((item) => (
            <Link className={pathname === item.href ? "active-link" : ""} href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown">
            <Link className={pathname.startsWith("/gallery") ? "active-link" : ""} href="/gallery" onClick={closeMenu}>
              Gallery <ChevronDown size={15} />
            </Link>
            <div className="dropdown-menu">
              <Link href="/gallery" onClick={closeMenu}>All gallery</Link>
              <Link href="/gallery?type=image" onClick={closeMenu}>Photos</Link>
              <Link href="/gallery?type=gif" onClick={closeMenu}>Videos/GIFs</Link>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link className={pathname === item.href ? "active-link" : ""} href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <Link className="mobile-register" href="/register" onClick={closeMenu}>Register Professional</Link>
        </nav>

        <div className="nav-actions">
          <Link className="pro-cta" href="/register">
            <FileBadge2 />
            <span>Professional<strong>Register</strong></span>
          </Link>
        </div>

        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && <button className="nav-scrim" aria-label="Close menu" onClick={closeMenu} />}
    </>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div>
          <Link className="brand logo-brand footer-logo" href="/"><img src="/logo.png" alt="HealBoxx" /></Link>
          <p>Your one-stop solution for mental health, therapy, coaching and wellness.</p>
          <div className="social-links">
            {[
              ["X", "https://twitter.com/healboxx"],
              ["FB", "https://www.facebook.com/healboxx"],
              ["IG", "https://www.instagram.com/healboxx/"],
              ["YT", "https://www.youtube.com/@healboxx"]
            ].map(([label, href]) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3>Pages</h3>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/corporate-eap">Corporate & EAP</Link>
          <Link href="/experts">Experts</Link>
          <Link href="/hello">Hello</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link href="/register">Professional Register</Link>
          <Link href="/hello">Contact HealBoxx</Link>
          <Link href="/corporate-eap">Corporate Wellness</Link>
          <a className="whatsapp-link" href="https://wa.me/917200045559" target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp Us</a>
        </div>
      </footer>
      <a className="whatsapp-float" href="https://wa.me/917200045559" target="_blank" rel="noreferrer" aria-label="Chat with HealBoxx on WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero animated-page-hero">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {image && (
        <div className="page-hero-media">
          <img src={image} alt={title} />
          <span />
        </div>
      )}
    </section>
  );
}

export function ProfessionalStrip() {
  return (
    <section className="professional-strip">
      <div>
        <BriefcaseBusiness />
        <span>Are you a professional?</span>
        <strong>Join HealBoxx and support more people with trusted care.</strong>
      </div>
      <Link href="/register">Register Here</Link>
    </section>
  );
}
