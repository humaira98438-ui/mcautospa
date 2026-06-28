const packages = [
  {
    name: "Essential Wash",
    price: "$19",
    tagline: "Clean and fresh",
    color: "border-slate-200",
    badge: null,
    features: [
      "Pre-wash rinse",
      "Foam bath",
      "Full pressure rinse",
      "Hand dry exterior",
      "Tyre shine",
      "Air freshener",
    ],
    missing: ["Interior detail", "Wax/sealant coat", "Engine bay clean"],
    cta: "Book Essential",
    ctaStyle: "border border-[#0F2D52] text-[#0F2D52] hover:bg-[#0F2D52] hover:text-white",
  },
  {
    name: "Premium Detail",
    price: "$49",
    tagline: "Most popular",
    color: "border-[#2563EB]",
    badge: "Most Popular",
    features: [
      "Pre-wash rinse",
      "Foam bath",
      "Full pressure rinse",
      "Hand dry exterior",
      "Tyre shine",
      "Air freshener",
      "Interior detail",
      "Dashboard & glass wipe",
    ],
    missing: ["Wax/sealant coat", "Engine bay clean"],
    cta: "Book Premium",
    ctaStyle: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-200",
  },
  {
    name: "Full Deluxe Spa",
    price: "$89",
    tagline: "The complete experience",
    color: "border-[#0F2D52]",
    badge: "Best Value",
    features: [
      "Pre-wash rinse",
      "Foam bath",
      "Full pressure rinse",
      "Hand dry exterior",
      "Tyre shine",
      "Air freshener",
      "Interior detail",
      "Dashboard & glass wipe",
      "Wax/sealant coat",
      "Engine bay clean",
    ],
    missing: [],
    cta: "Book Deluxe",
    ctaStyle: "bg-[#0F2D52] text-white hover:bg-[#2563EB] shadow-lg shadow-slate-200",
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <circle cx="8" cy="8" r="7" fill="#DBEAFE" />
    <path d="M5 8L7 10L11 6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <circle cx="8" cy="8" r="7" fill="#F1F5F9" />
    <path d="M10 6L6 10M6 6L10 10" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Services & Pricing
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4 leading-tight"
            style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
          >
            Choose Your Package
          </h2>
          <p
            className="text-slate-500 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Simple, transparent pricing. No hidden fees. Pick the level of care your car deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl border-2 ${pkg.color} p-8 relative card-lift fade-scale delay-${(i + 1) * 100}`}
            >
              {pkg.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-xl font-bold text-[#0F2D52] mb-1"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm text-slate-400"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {pkg.tagline}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className="text-5xl font-bold text-[#0F2D52]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {pkg.price}
                </span>
                <span
                  className="text-slate-400 text-sm ml-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  / visit
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span
                      className="text-sm text-slate-700"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
                {pkg.missing.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CrossIcon />
                    <span
                      className="text-sm text-slate-400 line-through"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${pkg.ctaStyle}`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm text-slate-400 mt-8"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          All packages include complimentary tyre pressure check. Prices vary for SUVs & vans.
        </p>
      </div>
    </section>
  );
}
