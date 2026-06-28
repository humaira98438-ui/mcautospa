"use client";

import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 7.5H19.5L14.5 11L16.5 17L11 13.5L5.5 17L7.5 11L2.5 7.5H8.5L11 2Z" stroke="#2563EB" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ceramic-Safe Products",
    desc: "pH-neutral foam and rinse agents safe for ceramic, PPF, and vinyl — no harsh detergents, no paint damage.",
    stat: "100%",
    statLabel: "paint-safe",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#2563EB" strokeWidth="1.6"/>
        <path d="M7 11L10 14L15 8" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Zero Water Spots — Guaranteed",
    desc: "Hand-dried with premium microfibre in a strict sequence. Spot found within 24 hrs? We fix it free.",
    stat: "0",
    statLabel: "water spots",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17L4 9M11 17V5M18 17V12" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Trained Detail Technicians",
    desc: "Not just washers — each tech is trained in paint correction, interior care, and trim protection.",
    stat: "6-step",
    statLabel: "trained process",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 6 4 10C4 14 7 18 11 19C15 18 18 14 18 10C18 6 15 3 11 3Z" stroke="#2563EB" strokeWidth="1.6"/>
        <path d="M8 10C9 8 11 7 11 7C11 7 13 8 14 10" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="13" r="1.5" fill="#2563EB"/>
      </svg>
    ),
    title: "Eco Water Reclamation",
    desc: "80% of wash water is recycled through closed-loop filtration — premium results, minimal environmental footprint.",
    stat: "80%",
    statLabel: "water recycled",
  },
];

const photos = [
  {
    url: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=85",
    alt: "Close up of car being polished",
    label: "Paint Protection",
  },
  {
    url: "https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=800&q=85",
    alt: "Man waxing car in garage",
    label: "Hand Polish",
  },
  {
    url: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&q=85",
    alt: "Professional applying wax coating to car hood",
    label: "Wax Coat",
  },
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 fade-up">
          <div>
            <div
              className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Why Choose Us
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#0F2D52] leading-[1.1]"
              style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
            >
              Built Different.
              <br />
              <span className="text-[#2563EB]">Cleaned Better.</span>
            </h2>
          </div>
          <p
            className="text-slate-500 text-base leading-relaxed max-w-sm lg:text-right"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every vehicle that comes through MCAutoSpa gets the same obsessive attention to detail — from wheel arches to headliner.
          </p>
        </div>

        {/* Main grid: feature list left, photo panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Feature rows */}
          <div className="flex flex-col divide-y divide-slate-100 fade-left">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-5 py-7 group"
              >
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0 group-hover:bg-[#DBEAFE] transition-colors">
                  {f.icon}
                </div>
                {/* Text */}
                <div className="flex-1">
                  <div
                    className="font-semibold text-[#0F2D52] text-sm mb-1.5"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {f.title}
                  </div>
                  <div
                    className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {f.desc}
                  </div>
                </div>
                {/* Stat chip */}
                <div className="shrink-0 text-right">
                  <div
                    className="text-xl font-bold text-[#0F2D52]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {f.stat}
                  </div>
                  <div
                    className="text-xs text-slate-400"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {f.statLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo stack panel */}
          <div className="flex flex-col gap-4 fade-right">
            {/* Big active photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              {photos.map((p, i) => (
                <img
                  key={i}
                  src={p.url}
                  alt={p.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  style={{ opacity: activePhoto === i ? 1 : 0, transform: activePhoto === i ? "scale(1)" : "scale(1.04)" }}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {photos[activePhoto].label}
                </span>
              </div>
              {/* Guarantee badge */}
              <div className="absolute top-5 right-5 bg-white rounded-xl px-4 py-2.5 shadow-lg">
                <div
                  className="text-[#0F2D52] font-bold text-sm"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  4.9★ Rating
                </div>
                <div
                  className="text-slate-400 text-xs"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  600+ reviews
                </div>
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-3 gap-3">
              {photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`relative rounded-xl overflow-hidden aspect-video transition-all duration-200 ${
                    activePhoto === i
                      ? "ring-2 ring-[#2563EB] ring-offset-2"
                      : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <img
                    src={p.url}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Bottom trust strip */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { val: "10K+", lbl: "Cars Washed" },
                { val: "98%", lbl: "Return Rate" },
                { val: "5 yrs", lbl: "Experience" },
              ].map((s) => (
                <div
                  key={s.lbl}
                  className="bg-[#F8F9FC] border border-slate-100 rounded-xl py-4 text-center hover:border-[#2563EB]/30 transition-colors"
                >
                  <div
                    className="text-xl font-bold text-[#0F2D52]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-xs text-slate-400 mt-0.5"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
