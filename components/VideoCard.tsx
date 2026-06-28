interface VideoCardProps {
  step: number;
  title: string;
  description: string;
  photoUrl: string;
  photoAlt: string;
}

export default function VideoCard({
  step,
  title,
  description,
  photoUrl,
  photoAlt,
}: VideoCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {/* Video placeholder */}
      <div className="relative aspect-video bg-slate-50 overflow-hidden">
        {/* Real car photo as background */}
        <img
          src={photoUrl}
          alt={photoAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0F2D52]/40 group-hover:bg-[#0F2D52]/30 transition-colors" />

        {/* Play button (video coming soon) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L16 10L7 15V5Z" fill="white" />
            </svg>
          </div>
          <span
            className="text-white/80 text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Video coming soon
          </span>
        </div>

        {/* Step badge */}
        <div
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center shadow"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {step}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-bold text-[#0F2D52] mb-1.5"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-slate-500 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
