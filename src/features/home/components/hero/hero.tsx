import { HeroBackground } from "./hero-background";
import { HeroHeader } from "./hero-header";
import { HeroCategories } from "./hero-categories";
import { HeroFeatures } from "./hero-features";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center text-center overflow-x-hidden bg-[#0d0b09] text-white select-none pt-8 sm:pt-12 pb-10 sm:pb-14 px-3 sm:px-6">
      <HeroBackground />
      <HeroHeader />
      <HeroCategories />
      <HeroFeatures />
    </section>
  );
}
