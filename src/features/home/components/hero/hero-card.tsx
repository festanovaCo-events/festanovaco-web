import Link from "next/link";
import type { HeroCategory } from "@/features/home/types/hero.types";

interface HeroCardProps {
  cat: HeroCategory;
}

export function HeroCard({ cat }: HeroCardProps) {
  const CardContent = (
    <div
      className={`group relative flex flex-col items-center justify-between w-full h-[270px] xs:h-[285px] sm:h-[310px] p-4 sm:p-5 rounded-t-6xl xs:rounded-t-8xl sm:rounded-t-9xl rounded-b-2xl sm:rounded-b-3xl bg-surface hover:bg-surface-hover backdrop-blur-xl border border-line ${cat.theme.borderHover} shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 transform hover:-translate-y-1.5 active:scale-[0.98] cursor-pointer overflow-hidden`}
    >
      <div className="hairline absolute inset-x-0 top-0 h-0.5 pointer-events-none" />

      <div
        className="card-glow absolute -top-10 left-1/2 -translate-x-1/2 size-36 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: cat.theme.glowBg }}
      />

      <div className="relative z-10 w-full flex justify-center pt-1">
        {cat.badge ? (
          <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-warm bg-chip border border-line-strong rounded-full backdrop-blur-md">
            {cat.badge}
          </span>
        ) : (
          <span className="px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-brand group-hover:text-brand-deep bg-brand-muted group-hover:bg-brand-muted-strong border border-brand-line rounded-full backdrop-blur-md transition-colors">
            {cat.theme.tagline}
          </span>
        )}
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center w-full py-2 transition-transform duration-300 group-hover:scale-110">
        {cat.iconNode}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center text-center pb-1">
        <h2 className="font-serif-luxury text-base xs:text-lg sm:text-xl font-medium tracking-wide text-ink drop-shadow-sm transition-colors">
          {cat.title}
        </h2>
        <p className="text-[10px] xs:text-[11px] sm:text-xs text-muted font-light tracking-normal mt-0.5 sm:mt-1 line-clamp-1">
          {cat.subtitle}
        </p>

        <div className="mt-2 sm:mt-2.5 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-medium text-brand-mid group-hover:text-brand-deep transition-colors">
          {cat.isAvailable ? (
            <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Ver colección <span aria-hidden="true">&rarr;</span>
            </span>
          ) : (
            <span className="text-faint text-[10px] uppercase tracking-wider">
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
      className="w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-t-6xl sm:rounded-t-9xl rounded-b-2xl sm:rounded-b-3xl"
    >
      {CardContent}
    </Link>
  );
}
