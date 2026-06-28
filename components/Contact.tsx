"use client";

import { useState } from "react";

const PHONE = "+16893490474";
const PHONE_DISPLAY = "689-349-0474";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pkg, setPkg] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!firstName.trim() && !lastName.trim()) {
      setError("Please enter your name before sending.");
      return false;
    }
    if (!pkg) {
      setError("Please select a package before sending.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSMS = () => {
    if (!validate()) return;
    const name = `${firstName} ${lastName}`.trim();
    const body = `Hi MCAutoSpa! I'd like to book a wash.\nName: ${name}\nPackage: ${pkg}`;
    window.open(`sms:${PHONE}?&body=${encodeURIComponent(body)}`, "_self");
  };

  const handleCall = () => {
    window.open(`tel:${PHONE}`, "_self");
  };

  return (
    <section id="contact" className="py-24 bg-[#0F2D52] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1E40AF]/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="fade-left">
            <div
              className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Book a Wash
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
            >
              Ready for a
              <br />
              <span className="text-[#60A5FA]">Spotless Ride?</span>
            </h2>
            <p
              className="text-white/65 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We come to you — fully equipped van, door-to-door service. Fill your name and pick a package, then SMS or call us directly.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 3H7L9 7L6.5 8.5C7.5 10.5 9.5 12.5 11.5 13.5L13 11L17 13V17C17 17 14 18 9 13C4 8 3 5 3 5V3Z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: "Phone / SMS",
                  value: PHONE_DISPLAY,
                  href: `tel:${PHONE}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="#60A5FA" strokeWidth="1.5"/>
                      <path d="M2 7L9 11L16 7" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "clientsupport@mcautospa.info",
                  href: "mailto:clientsupport@mcautospa.info",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="14" height="12" rx="2" stroke="#60A5FA" strokeWidth="1.5"/>
                      <path d="M6 7H12M6 10H10" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "Service Area",
                  value: "We come to you — fully mobile, door-to-door",
                  href: null,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="#60A5FA" strokeWidth="1.5"/>
                      <path d="M9 5V9L12 11" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: "Hours",
                  value: "Mon–Sat 8am–6pm, Sun 9am–4pm",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/50 mb-0.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium text-sm hover:text-[#60A5FA] transition-colors" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl fade-right">
            <h3 className="text-xl font-bold text-[#0F2D52] mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>
              Book in Seconds
            </h3>
            <p className="text-slate-400 text-sm mb-6" style={{ fontFamily: "var(--font-inter)" }}>
              Fill your name and pick a package — then SMS or call us directly.
            </p>

            <div className="flex flex-col gap-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value); setError(""); }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value); setError(""); }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
              </div>

              {/* Package */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Package</label>
                <select
                  value={pkg}
                  onChange={(e) => { setPkg(e.target.value); setError(""); }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition bg-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <option value="">Select a package…</option>
                  <option>Essential Wash — $19</option>
                  <option>Premium Detail — $49</option>
                  <option>Full Deluxe Spa — $89</option>
                </select>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl" style={{ fontFamily: "var(--font-jakarta)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#DC2626" strokeWidth="1.4"/>
                    <path d="M8 5V8.5M8 11H8.01" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  {error}
                </div>
              )}

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-1">
                <button
                  type="button"
                  onClick={handleSMS}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-all shadow-md"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M14.5 2.5H2.5C1.95 2.5 1.5 2.95 1.5 3.5V11.5C1.5 12.05 1.95 12.5 2.5 12.5H5.5L8.5 15.5L11.5 12.5H14.5C15.05 12.5 15.5 12.05 15.5 11.5V3.5C15.5 2.95 15.05 2.5 14.5 2.5Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
                    <path d="M5 7H12M5 9.5H9" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Send SMS
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-white border-2 border-slate-200 hover:border-[#2563EB] text-[#0F2D52] hover:text-[#2563EB] transition-all"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M3 3H6.5L8 6.5L6 8C6.85 9.7 8.3 11.15 10 12L11.5 10L15 11.5V15C15 15 12.5 16 8.5 12C4.5 8 3 5.5 3 5.5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  Call Us
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 mt-1" style={{ fontFamily: "var(--font-inter)" }}>
                SMS opens pre-filled · Call connects instantly
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
