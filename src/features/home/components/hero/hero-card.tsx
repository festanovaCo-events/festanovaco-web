import Link from "next/link";
import type { HeroCategory } from "@/features/home/types/hero.types";

interface HeroCardProps {
  cat: HeroCategory;
}

export function HeroCard({ cat }: HeroCardProps) {
  const CardContent = (
    <div
      className={`group relative flex flex-col items-center justify-between w-full h-[270px] xs:h-[285px] sm:h-[310px] p-4 sm:p-5 rounded-t-[44px] xs:rounded-t-[52px] sm:rounded-t-[60px] rounded-b-2xl sm:rounded-b-3xl backdrop-blur-xl bg-stone-900/60 hover:bg-stone-800/75 border border-white/20 ${cat.theme.borderHover} shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_rgba(216,176,102,0.25)] transition-all duration-300 transform hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer overflow-hidden`}
    >
      {/* Top light reflection highlight */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />

      {/* Warm ambient hover glow */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full blur-2xl opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: cat.theme.glowBg }}
      />

      {/* Header pill / status badge */}
      <div className="relative z-10 w-full flex justify-center pt-1">
        {cat.badge ? (
          <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-amber-100 bg-stone-800/90 border border-white/20 rounded-full backdrop-blur-md">
            {cat.badge}
          </span>
        ) : (
          <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-amber-200 group-hover:text-white bg-amber-950/30 group-hover:bg-amber-900/50 border border-amber-300/30 rounded-full backdrop-blur-md transition-colors">
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
        <h2 className="font-serif-luxury text-base xs:text-lg sm:text-xl font-medium tracking-wide text-white drop-shadow-sm transition-colors">
          {cat.title}
        </h2>
        <p className="text-[10px] xs:text-[11px] sm:text-xs text-stone-300 font-light tracking-normal mt-0.5 sm:mt-1 line-clamp-1">
          {cat.subtitle}
        </p>

        {/* Action cue */}
        <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-medium text-amber-200 group-hover:text-amber-100 transition-colors">
          {cat.isAvailable ? (
            <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Ver colección <span aria-hidden="true">&rarr;</span>
            </span>
          ) : (
            <span className="text-stone-400 text-[10px] uppercase tracking-wider">
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
      className="w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50 rounded-t-[44px] sm:rounded-t-[60px] rounded-b-2xl sm:rounded-b-3xl"
    >
      {CardContent}
    </Link>
  );
}
