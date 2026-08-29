import { HeroCard } from "./hero-card";
import { allCategories } from "@/features/home/data/hero-data";

export function HeroCategories() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto my-6 sm:my-10 px-3 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5 justify-items-center">
        {allCategories.map((cat) => (
          <HeroCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}
