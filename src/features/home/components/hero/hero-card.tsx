import Link from "next/link";
import type { HeroCategory } from "@/features/home/types/hero.types";

interface HeroCardProps {
  cat: HeroCategory;
}

export function HeroCard({ cat }: HeroCardProps) {
  const CardContent = (
    <div
      className={`group relative flex flex-col items-center justify-between w-full h-67.5 xs:h-[285px] sm:h-77.5 p-4 sm:p-5 rounded-t-[44px] xs:rounded-t-[52px] sm:rounded-t-[60px] rounded-b-2xl sm:rounded-b-3xl bg-white/75 hover:bg-white/90 backdrop-blur-xl border border-slate-200/80 ${cat.theme.borderHover} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer overflow-hidden`}
    >
      {/* Top light reflection highlight */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-linear-to-r from-transparent via-slate-300/50 to-transparent pointer-events-none" />

      {/* Subtle ambient hover tint */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-2xl opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: cat.theme.glowBg }}
      />

      {/* Header pill / status badge */}
      <div className="relative z-10 w-full flex justify-center pt-1">
        {cat.badge ? (
          <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-slate-500 bg-slate-100/90 border border-slate-200/80 rounded-full">
            {cat.badge}
          </span>
        ) : (
          <span
            className={`px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest ${cat.theme.badgeBg} ${cat.theme.badgeText} rounded-full transition-colors border`}
          >
            {cat.theme.tagline}
          </span>
        )}
      </div>

      {/* Centered Icon */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full py-2 transition-transform duration-300 group-hover:scale-110">
        {cat.iconNode}
      </div>

      {/* Card Title, Subtitle & Action */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pb-1">
        <h2 className="font-serif-luxury text-base sm:text-xl font-medium tracking-wide text-slate-900 transition-colors">
          {cat.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-normal tracking-normal mt-0.5 sm:mt-1 line-clamp-1">
          {cat.subtitle}
        </p>

        {/* Action cue */}
        <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-1 text-xs sm:text-sm font-medium">
          {cat.isAvailable ? (
            <span
              className="inline-flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2"
              style={{ color: cat.theme.accentColor }}
            >
              <span>Ver colección</span>
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </span>
          ) : (
            <span className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-medium">
              Pronto disponible
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (!cat.isAvailable) {
    return <div className="w-full">{CardContent}</div>;
  }

  return (
    <Link
      href={cat.href}
      className="w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 rounded-t-[44px] sm:rounded-t-[60px] rounded-b-2xl sm:rounded-b-3xl"
    >
      {CardContent}
    </Link>
  );
}
