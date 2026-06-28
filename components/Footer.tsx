export default function Footer() {
  return (
    <footer className="bg-[#080F1A] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 12.5C2 12.5 4 8 9 8C14 8 16 12.5 16 12.5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="5.5" cy="13.5" r="1.5" fill="white"/>
                  <circle cx="12.5" cy="13.5" r="1.5" fill="white"/>
                  <path d="M5 9C5.5 7 7 5.5 9 5.5C11 5.5 12.5 7 13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                MC<span className="text-[#60A5FA]">AutoSpa</span>
              </span>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Professional car wash and detailing. Meticulous 6-step process, premium products, spotless results every time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Process", "Services", "About", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "+1 (555) 123-4567",
                "hello@mcautospa.com",
                "123 AutoSpa Blvd, CA",
                "Mon–Sat 8am–6pm",
              ].map((l) => (
                <li
                  key={l}
                  className="text-sm text-white/60"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} MCAutoSpa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/30 text-xs hover:text-white/60 transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
