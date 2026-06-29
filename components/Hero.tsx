import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Car being washed with foam and water"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        {/* Gradient overlay — left dark, right lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D52]/90 via-[#0F2D52]/60 to-[#0F2D52]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
          >
            Your Car
            <br />
            <span className="text-[#60A5FA]">Deserves</span>
            <br />
            The Best.
          </h1>

          {/* Sub */}
          <p
            className="text-lg text-white/75 leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From pre-wash foam bath to final inspection — MCAutoSpa delivers a
            meticulous 6-step process that leaves your vehicle showroom perfect.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Book a Wash
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-base hover:bg-white/20 transition-all"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              See Our Process
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15">
            {[
              { value: "10K+", label: "Cars Washed" },
              { value: "4.9★", label: "Average Rating" },
              { value: "6-Step", label: "Proven Process" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-white/60 mt-0.5"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" style={{ animation: "scrollCue 2s ease-in-out infinite" }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/50 rounded-full" />
        </div>
      </div>
      <style>{`
        @keyframes scrollCue {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
