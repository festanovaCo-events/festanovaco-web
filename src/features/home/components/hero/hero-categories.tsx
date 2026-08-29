import { HeroCard } from "./hero-card";
import { mainCategories, comingSoonCategories } from "@/features/home/data/hero-data";

export function HeroCategories() {
  return (
    <div className="relative z-10 w-full max-w-5xl my-6 sm:my-10 px-2 sm:px-4 flex flex-col gap-3.5 sm:gap-5 items-center">
      {/* Main 4 Cards: 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-3.5 sm:gap-4 lg:gap-5 w-full max-w-92 xs:max-w-100 sm:max-w-none justify-items-center mx-auto">
        {mainCategories.map((cat) => (
          <HeroCard key={cat.id} cat={cat} />
        ))}
      </div>

      {/* Secondary 2 Cards Row: Graduación & Baby Shower */}
      <div className="grid grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4 lg:gap-5 w-full max-w-92 xs:max-w-100 sm:max-w-110 md:max-w-120 justify-items-center mx-auto">
        {comingSoonCategories.map((cat) => (
          <HeroCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}
