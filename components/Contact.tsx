"use client";

import { useState } from "react";

const WA_NUMBER = "16893490474"; // no + or dashes

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim() || "A customer";
    const text = [
      `Hi MCAutoSpa! I'd like to book a wash. 🚗`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone || "Not provided"}`,
      `*Package:* ${pkg || "Not selected"}`,
      message ? `*Notes:* ${message}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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
              We come to you — fully equipped van, door-to-door service. Fill the form and we'll confirm your slot via WhatsApp.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 3H7L9 7L6.5 8.5C7.5 10.5 9.5 12.5 11.5 13.5L13 11L17 13V17C17 17 14 18 9 13C4 8 3 5 3 5V3Z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: "Phone / WhatsApp",
                  value: "689-349-0474",
                  href: `https://wa.me/${WA_NUMBER}`,
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
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-[#60A5FA] transition-colors"
                        style={{ fontFamily: "var(--font-jakarta)" }}>
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
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-bold text-[#0F2D52]" style={{ fontFamily: "var(--font-jakarta)" }}>
                Get in Touch
              </h3>
              {/* WA badge */}
              <div className="ml-auto flex items-center gap-1.5 bg-[#25D366]/10 text-[#128C7E] text-xs font-semibold px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-jakarta)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Sends via WhatsApp
              </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>First Name</label>
                  <input
                    type="text" placeholder="John" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Last Name</label>
                  <input
                    type="text" placeholder="Doe" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Your Phone</label>
                <input
                  type="tel" placeholder="+1 (689) 000-0000" value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Package</label>
                <select
                  value={pkg} onChange={(e) => setPkg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition bg-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <option value="">Select a package…</option>
                  <option>Essential Wash — $19</option>
                  <option>Premium Detail — $49</option>
                  <option>Full Deluxe Spa — $89</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide" style={{ fontFamily: "var(--font-jakarta)" }}>Message (optional)</label>
                <textarea
                  rows={3} placeholder="Your address, preferred time, vehicle type…"
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition resize-none"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-sm transition-all shadow-md mt-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5a] text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Booking via WhatsApp
              </button>

              <p className="text-center text-xs text-slate-400" style={{ fontFamily: "var(--font-inter)" }}>
                Opens WhatsApp with your booking details pre-filled
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
