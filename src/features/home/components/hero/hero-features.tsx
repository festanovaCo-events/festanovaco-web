import { HugeiconsIcon } from "@hugeicons/react";
import { footerFeatures } from "@/features/home/data/hero-data";

export function HeroFeatures() {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-2 xs:px-3 sm:px-6 mt-6 sm:mt-10">
      <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-black/55 backdrop-blur-md p-3.5 xs:p-4 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
          {footerFeatures.map((feat, idx) => (
            <div
              key={idx}
              className={`flex flex-col xs:flex-row items-center xs:items-center gap-2 xs:gap-3 sm:gap-4 text-center xs:text-left ${
                idx > 0
                  ? "md:border-l md:border-white/15 md:pl-4 lg:pl-6"
                  : ""
              }`}
            >
              <div className="shrink-0 p-2 sm:p-2.5 rounded-xl bg-white/10 border border-white/20 shadow-inner text-amber-200 flex items-center justify-center">
                <HugeiconsIcon
                  icon={feat.icon}
                  size={22}
                  strokeWidth={1.8}
                  className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight truncate xs:whitespace-normal">
                  {feat.title}
                </p>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-amber-100/75 font-light tracking-normal leading-tight mt-0.5 sm:mt-1">
                  {feat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
