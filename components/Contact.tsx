"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0F2D52] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1E40AF]/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
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
              Call us, drop in, or leave your details and we'll get back to you to confirm your slot.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 3H7L9 7L6.5 8.5C7.5 10.5 9.5 12.5 11.5 13.5L13 11L17 13V17C17 17 14 18 9 13C4 8 3 5 3 5V3Z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  ),
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 2C6.24 2 4 4.24 4 7C4 11 9 16 9 16C9 16 14 11 14 7C14 4.24 11.76 2 9 2Z" stroke="#60A5FA" strokeWidth="1.5"/>
                      <circle cx="9" cy="7" r="2" stroke="#60A5FA" strokeWidth="1.5"/>
                    </svg>
                  ),
                  label: "Location",
                  value: "123 AutoSpa Boulevard, CA 90210",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="#60A5FA" strokeWidth="1.5"/>
                      <path d="M2 7L9 11L16 7" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@mcautospa.com",
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
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs text-white/50 mb-0.5 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-white font-medium text-sm"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl fade-right">
            <h3
              className="text-xl font-bold text-[#0F2D52] mb-6"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Get in Touch
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Package
                </label>
                <select
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
                <label
                  className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Message (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any notes about your vehicle or preferred time…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition resize-none"
                  style={{ fontFamily: "var(--font-inter)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#0F2D52] text-white font-semibold text-sm hover:bg-[#2563EB] transition-colors shadow-md mt-1"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
