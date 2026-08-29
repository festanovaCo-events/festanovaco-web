import { HugeiconsIcon } from "@hugeicons/react";
import { footerFeatures } from "@/features/home/data/hero-data";

export function HeroFeatures() {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 mt-8 sm:mt-12">
      <div className="rounded-xl sm:rounded-3xl border border-[#cba358]/55 bg-stone-950/85 backdrop-blur-lg px-3.5 py-3.5 xs:px-5 xs:py-4 sm:px-8 sm:py-6 shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-3.5 sm:gap-6 divide-y-0">
          {footerFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 xs:gap-3 sm:gap-4 justify-start sm:justify-start lg:justify-center text-left"
            >
              <div className="shrink-0 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#cba358]/15 border border-[#cba358]/40 shadow-inner">
                <HugeiconsIcon
                  icon={feat.icon}
                  size={22}
                  strokeWidth={2}
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#deb768]"
                />
              </div>
              <div>
                <p className="text-[10px] xs:text-[11px] sm:text-sm font-bold text-[#faf3e8] tracking-wider leading-tight">
                  {feat.title}
                </p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#deb768] font-medium tracking-wide leading-tight mt-0.5">
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
