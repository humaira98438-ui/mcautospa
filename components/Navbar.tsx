"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#0F2D52] flex items-center justify-center shadow-md group-hover:bg-[#2563EB] transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 12.5C2 12.5 4 8 9 8C14 8 16 12.5 16 12.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="5.5" cy="13.5" r="1.5" fill="white"/>
              <circle cx="12.5" cy="13.5" r="1.5" fill="white"/>
              <path d="M5 9C5.5 7 7 5.5 9 5.5C11 5.5 12.5 7 13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M7 6.5C7.5 5 8.2 4 9 4C9.8 4 10.5 5 11 6.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </div>
          <span
            className="text-[#0F2D52] font-bold text-lg tracking-tight"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            MC<span className="text-[#2563EB]">AutoSpa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0F2D52] transition-colors"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#0F2D52] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-[#0F2D52] py-1"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 rounded-xl bg-[#0F2D52] text-white text-sm font-semibold text-center hover:bg-[#2563EB] transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
