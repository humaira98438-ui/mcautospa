"use client";

import { useState } from "react";

const steps = [
  {
    step: 1,
    title: "Pre-Wash Rinse",
    description:
      "High-pressure rinse to loosen and remove heavy surface dirt, mud, and debris before foam application.",
    photoUrl:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=85",
    photoAlt: "Car being rinsed with high pressure water",
  },
  {
    step: 2,
    title: "Foam Bath",
    description:
      "pH-balanced snow foam cannon covers every inch of the vehicle, breaking down grime and road film safely.",
    photoUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=85",
    photoAlt: "Car covered in thick white foam",
  },
  {
    step: 3,
    title: "Full Rinse",
    description:
      "Complete pressure rinse removes all foam and loosened contaminants, leaving a clean surface ready for detailing.",
    photoUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    photoAlt: "Car being rinsed with water spray",
  },
  {
    step: 4,
    title: "Interior Detail",
    description:
      "Deep vacuum, dashboard wipe-down, window clean, and air freshener — every surface inside restored to showroom condition.",
    photoUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=85",
    photoAlt: "Clean car interior being detailed",
  },
  {
    step: 5,
    title: "Hand Dry",
    description:
      "Premium microfibre towels used by hand across the full exterior — zero water spots, zero swirl marks.",
    photoUrl:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85",
    photoAlt: "Car being hand dried with microfibre cloth",
  },
  {
    step: 6,
    title: "Final Inspection",
    description:
      "Our detail technician does a full walk-around quality check before your vehicle is returned — spotless, every time.",
    photoUrl:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=85",
    photoAlt: "Shiny clean car after wash",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const displayed = hovered !== null ? hovered : active;

  const goTo = (i: number) => setActive(i);
  const handleHoverEnter = (i: number) => setHovered(i);
  const handleHoverLeave = () => setHovered(null);

  return (
    <section id="process" className="py-24 bg-[#F8F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <div
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Our Process
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4 leading-tight"
            style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
          >
            From Dirty to Dazzling
          </h2>
          <p
            className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every vehicle goes through our meticulous 6-step process — no shortcuts, no rushing.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:min-h-[600px]">
          {/* Accordion list */}
          <div className="flex flex-col gap-2">
            {steps.map((s, i) => {
              const isActive = active === i;
              const isHov = hovered === i;
              const isHighlit = isActive || isHov;

              return (
                <div
                  key={s.step}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer group
                    ${isActive
                      ? "border-[#2563EB] bg-white shadow-lg shadow-blue-100/60"
                      : isHov
                      ? "border-[#2563EB]/40 bg-white shadow-md"
                      : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  onMouseEnter={() => handleHoverEnter(i)}
                  onMouseLeave={handleHoverLeave}
                  onClick={() => goTo(i)}
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    {/* Step number */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300
                        ${isHighlit ? "bg-[#2563EB] text-white scale-110" : "bg-[#EFF6FF] text-[#2563EB]"}`}
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {s.step}
                    </div>

                    <span
                      className={`flex-1 font-semibold text-sm transition-colors duration-200
                        ${isHighlit ? "text-[#0F2D52]" : "text-slate-500"}`}
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {s.title}
                    </span>

                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`shrink-0 transition-all duration-200 ${isHighlit ? "text-[#2563EB] translate-x-0.5" : "text-slate-300"}`}
                    >
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Expanded description — only for active */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out
                      ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 pb-5">
                      <p
                        className="text-sm text-slate-500 leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {s.description}
                      </p>

                      {/* Mobile inline image */}
                      <div className="lg:hidden relative rounded-xl overflow-hidden aspect-video">
                        <img
                          src={s.photoUrl}
                          alt={s.photoAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0F2D52]/35" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M6 4.5L14 9L6 13.5V4.5Z" fill="white" />
                            </svg>
                          </div>
                          <span className="text-white/80 text-xs bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-jakarta)" }}>
                            Video coming soon
                          </span>
                        </div>
                      </div>

                      {/* Dot indicators */}
                      <div className="flex gap-1.5 mt-4">
                        {steps.map((_, j) => (
                          <button
                            key={j}
                            onClick={(e) => { e.stopPropagation(); goTo(j); }}
                            className={`h-1.5 rounded-full transition-all duration-300
                              ${j === active ? "bg-[#2563EB] w-8" : "bg-slate-200 w-5 hover:bg-slate-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right image panel — desktop only */}
          <div className="hidden lg:block sticky top-28">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              {/* Layered crossfade: render both current & next, animate out/in */}
              {steps.map((s, i) => (
                <img
                  key={i}
                  src={s.photoUrl}
                  alt={s.photoAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: displayed === i ? 1 : 0,
                    willChange: "opacity",
                  }}
                  loading="eager"
                />
              ))}

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/75 via-[#0F2D52]/10 to-transparent z-10" />

              {/* Play button */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:scale-110 hover:bg-white/25 transition-all duration-200 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M7 5L18 11L7 17V5Z" fill="white" />
                  </svg>
                </div>
                <span
                  className="text-white/80 text-sm bg-black/25 backdrop-blur-sm px-4 py-1.5 rounded-full"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Video coming soon
                </span>
              </div>

              {/* Step label bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center shadow-lg transition-all duration-300"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {steps[displayed].step}
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm transition-all duration-300"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {steps[displayed].title}
                    </div>
                    <div
                      className="text-white/55 text-xs"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Step {steps[displayed].step} of {steps.length}
                    </div>
                  </div>
                  {/* Dot strip */}
                  <div className="flex gap-1 ml-auto">
                    {steps.map((_, j) => (
                      <button
                        key={j}
                        onClick={() => goTo(j)}
                        className={`h-1.5 rounded-full transition-all duration-300
                          ${j === active ? "bg-white w-6" : "bg-white/30 w-3 hover:bg-white/60"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
