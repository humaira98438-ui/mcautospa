const reviews = [
  {
    name: "James R.",
    role: "BMW 3 Series Owner",
    avatar: "JR",
    rating: 5,
    text: "Absolute perfection. Booked the Deluxe package and my car came back looking better than the day I bought it. The foam bath step alone is worth every penny.",
  },
  {
    name: "Sarah M.",
    role: "Tesla Model 3 Owner",
    avatar: "SM",
    rating: 5,
    text: "Finally a car wash that actually cares about the paint. No swirl marks, no water spots. The hand dry process is meticulous. Will not go anywhere else.",
  },
  {
    name: "David K.",
    role: "Range Rover Owner",
    avatar: "DK",
    rating: 5,
    text: "Got the Premium Detail for my Rover. Interior looked brand new — even got the dog hair out of the seats. Fast turnaround too. Genuinely impressed.",
  },
  {
    name: "Aisha T.",
    role: "Mercedes C-Class Owner",
    avatar: "AT",
    rating: 5,
    text: "Used MCAutoSpa three times now. The 6-step process is real and thorough. You can see the difference at each stage. Highly recommend the Essential for weekly maintenance.",
  },
];

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1.5L8.5 5H12L9 7.5L10 11L7 9L4 11L5 7.5L2 5H5.5L7 1.5Z"
          fill="#F59E0B"
        />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div
            className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Customer Reviews
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#0F2D52] mb-4 leading-tight"
            style={{ fontFamily: "'Clash Display', var(--font-jakarta), sans-serif" }}
          >
            Happy Drivers
          </h2>
          <p
            className="text-slate-500 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Don't take our word for it — hear from customers who've experienced the MCAutoSpa difference.
          </p>
        </div>

        {/* Overall rating strip */}
        <div className="flex flex-wrap justify-center gap-10 mb-16 p-8 bg-[#F8F9FC] rounded-2xl border border-slate-100">
          <div className="text-center">
            <div
              className="text-5xl font-bold text-[#0F2D52]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              4.9
            </div>
            <StarRow count={5} />
            <div
              className="text-sm text-slate-400 mt-1"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Average Rating
            </div>
          </div>
          <div className="w-px bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div
              className="text-5xl font-bold text-[#0F2D52]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              600+
            </div>
            <div
              className="text-sm text-slate-400 mt-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Verified Reviews
            </div>
          </div>
          <div className="w-px bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div
              className="text-5xl font-bold text-[#0F2D52]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              98%
            </div>
            <div
              className="text-sm text-slate-400 mt-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Would Return
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`bg-[#F8F9FC] border border-slate-100 rounded-2xl p-6 card-lift fade-up delay-${(i + 1) * 100}`}
            >
              <StarRow count={r.rating} />
              <p
                className="text-slate-700 text-sm leading-relaxed mt-4 mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-[#0F2D52] text-white text-xs font-bold flex items-center justify-center"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-[#0F2D52]"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs text-slate-400"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
