import { HugeiconsIcon } from "@hugeicons/react";
import { footerFeatures } from "@/features/home/data/hero-data";

export function HeroFeatures() {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 mt-6 sm:mt-8 mb-2">
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
        {footerFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E9DFD0] hover:border-[#C5A880] dark:border-white/10 dark:hover:border-amber-300/30 bg-white/80 hover:bg-white dark:bg-white/[0.03] dark:hover:bg-white/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-sm backdrop-blur-md transition-all duration-300"
          >
            <HugeiconsIcon
              icon={feat.icon}
              size={16}
              strokeWidth={1.8}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800 dark:text-amber-200/90 shrink-0"
            />
            <span className="text-[11px] sm:text-xs font-medium text-stone-800 dark:text-stone-200 tracking-wide">
              {feat.title}
            </span>
            <span className="text-stone-300 dark:text-stone-500 text-[10px] hidden md:inline">•</span>
            <span className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 font-light hidden md:inline">
              {feat.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
