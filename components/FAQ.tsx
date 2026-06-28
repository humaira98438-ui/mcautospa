"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does each wash package take?",
    a: "Essential Wash takes around 20 minutes. Premium Detail is 45–60 minutes. Full Deluxe Spa takes 90–120 minutes depending on vehicle size. We'll give you an accurate estimate when you book.",
  },
  {
    q: "Do I need to make a booking or can I walk in?",
    a: "Walk-ins are welcome subject to availability. For guaranteed time slots — especially for Premium and Deluxe — we recommend booking ahead via WhatsApp using the form below.",
  },
  {
    q: "Are your products safe for ceramic coatings and wraps?",
    a: "Yes. We use pH-neutral, coating-safe foam and rinse agents specifically selected to protect ceramic coatings, PPF, and vinyl wraps. Just let us know when booking.",
  },
  {
    q: "What vehicles do you cater for?",
    a: "We service all standard cars, estates, and coupes at standard pricing. SUVs, vans, and large 4x4s attract a small supplement. Motorcycles and trailers are not currently offered.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "We stand behind our work. If you're not happy with any aspect of the wash, bring the vehicle back within 24 hours and we'll reclean the affected areas at no charge.",
  },
  {
    q: "Do you use recycled water?",
    a: "Yes — our facility uses a water reclamation system that recycles and filters up to 80% of wash water. We're committed to minimising our environmental footprint.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F8F9FC]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <div
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            FAQ
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4 leading-tight"
            style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
          >
            Got Questions?
          </h2>
          <p
            className="text-slate-500 text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-100 rounded-2xl overflow-hidden fade-up delay-${Math.min(i * 100, 500)}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-[#0F2D52] text-sm leading-snug"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                    open === i ? "bg-[#2563EB] border-[#2563EB] rotate-45" : "bg-white"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2V10M2 6H10"
                      stroke={open === i ? "white" : "#64748B"}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
