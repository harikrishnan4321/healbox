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

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="nav">
        <Link className="brand logo-brand" href="/" onClick={closeMenu}>
          <img src="/logo.png" alt="HealBoxx" />
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navItems.slice(0, 2).map((item) => (
            <Link className={pathname === item.href ? "active-link" : ""} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <div className="nav-dropdown">
            <Link className={pathname === "/gallery" ? "active-link" : ""} href="/gallery" onClick={closeMenu}>Gallery <ChevronDown size={15} /></Link>
            <div className="dropdown-menu">
              <Link href="/gallery?type=image" onClick={closeMenu}>Photos</Link>
              <Link href="/gallery?type=gif" onClick={closeMenu}>Videos/GIFs</Link>
            </div>
          </div>
          {navItems.slice(2).map((item) => (
            <Link className={pathname === item.href ? "active-link" : ""} href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link className="mobile-register" href="/register" onClick={closeMenu}>Register Professional</Link>
          <Link className="mobile-student-register" href="/student-registration" onClick={closeMenu}>Student Registration</Link>
        </nav>
        <div className="nav-actions">
          <Link className="student-cta" href="/student-registration">
            <GraduationCap />
            <span>Student<strong>Register</strong></span>
          </Link>
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
    <footer className="footer">
      <div>
        <Link className="brand logo-brand footer-logo" href="/"><img src="/logo.png" alt="HealBoxx" /></Link>
        <p>Your one-stop solution for mental health, therapy, coaching and wellness.</p>
      </div>
      <div>
        <h3>Pages</h3>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/corporate-eap">Corporate and EAP</Link>
        <Link href="/experts">Experts</Link>
        <Link href="/hello">Hello</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <h3>Connect</h3>
        <Link href="/register">Professional Register</Link>
        <Link href="/student-registration">Student Registration</Link>
        <Link href="/hello">Contact HealBoxx</Link>
        <Link href="/corporate-eap">Corporate Wellness</Link>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero cinematic-hero">
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
