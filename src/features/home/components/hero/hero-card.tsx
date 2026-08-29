import Link from "next/link";
import type { HeroCategory } from "@/features/home/types/hero.types";

interface HeroCardProps {
  cat: HeroCategory;
}

export function HeroCard({ cat }: HeroCardProps) {
  return (
    <Link
      href={cat.href}
      className={`group relative flex flex-col items-center justify-between w-full max-w-44 xs:max-w-48 sm:max-w-52 md:max-w-56 h-68 xs:h-74 sm:h-80 md:h-84 p-3.5 xs:p-4 sm:p-5 rounded-t-[60px] xs:rounded-t-[72px] sm:rounded-t-[85px] md:rounded-t-[100px] rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl backdrop-blur-md bg-stone-950/45 border-[1.5px] sm:border-2 ${cat.theme.border} ${cat.theme.shadow} ${cat.theme.hoverShadow} transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden`}
    >
      {/* Coming soon badge if present */}
      {cat.badge && (
        <span className="absolute top-2.5 xs:top-3 sm:top-5 md:top-6 z-20 px-2.5 xs:px-3 sm:px-3.5 py-0.5 sm:py-1 text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-100 bg-black/85 border border-amber-400/50 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)] backdrop-blur-md">
          {cat.badge}
        </span>
      )}

      {/* Starry glitter / particle sparkles overlay inside the glass */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
        viewBox="0 0 200 300"
        fill="none"
      >
        <circle cx="30" cy="40" r="1" fill={cat.theme.particleColor} />
        <circle cx="170" cy="50" r="1.5" fill={cat.theme.particleColor} />
        <circle cx="50" cy="120" r="1.2" fill={cat.theme.particleColor} />
        <circle cx="160" cy="140" r="1" fill={cat.theme.particleColor} />
        <circle cx="85" cy="210" r="1.5" fill={cat.theme.particleColor} />
        <circle cx="140" cy="225" r="1.2" fill={cat.theme.particleColor} />
        <circle cx="45" cy="260" r="1" fill={cat.theme.particleColor} />
        <circle cx="165" cy="270" r="1.5" fill={cat.theme.particleColor} />
        <path
          d="M120 70L121 72L123 73L121 74L120 76L119 74L117 73L119 72Z"
          fill={cat.theme.particleColor}
        />
        <path
          d="M40 180L41 182L43 183L41 184L40 186L39 184L37 183L39 182Z"
          fill={cat.theme.particleColor}
        />
      </svg>

      {/* Inner ambient radial glow */}
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 w-36 sm:w-40 h-36 sm:h-40 rounded-full ${cat.theme.glowBg} blur-xl sm:blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
      />

      {/* Subtle glass reflection highlight */}
      <div className="absolute inset-0 bg-linear-to-b from-white/15 via-transparent to-transparent opacity-70 rounded-t-[60px] xs:rounded-t-[72px] sm:rounded-t-[85px] md:rounded-t-[100px] pointer-events-none" />

      {/* Center Icon Container: well balanced and centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full pt-2 xs:pt-3 sm:pt-4 transition-transform duration-300 group-hover:scale-110">
        {cat.iconNode}
      </div>

      {/* Card Title & Golden Floral Star Accent */}
      <div className="relative z-10 w-full flex flex-col items-center pb-1">
        <h2 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold tracking-widest text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-pre-line text-center leading-tight">
          {cat.title}
        </h2>

        {/* Enlarged golden 8-point floral star ornament */}
        <div className="mt-1.5 sm:mt-2.5 flex items-center justify-center gap-1 sm:gap-2 w-full max-w-18 sm:max-w-24 opacity-85 group-hover:opacity-100 transition-opacity">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#deb768]" />
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#deb768] drop-shadow-[0_0_8px_rgba(222,183,104,0.9)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {/* 8-point floral star */}
            <path d="M12 2.5L13.8 7.8L19.2 6L17.4 11.4L22.5 12L17.4 12.6L19.2 18L13.8 16.2L12 21.5L10.2 16.2L4.8 18L6.6 12.6L1.5 12L6.6 11.4L4.8 6L10.2 7.8Z" />
            <circle cx="12" cy="12" r="2.8" fill="#fff5de" />
          </svg>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#deb768]" />
        </div>
      </div>
    </Link>
  );
}
