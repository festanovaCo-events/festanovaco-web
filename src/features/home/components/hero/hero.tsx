import { HeroBackground } from "./hero-background";
import { HeroHeader } from "./hero-header";
import { HeroCategories } from "./hero-categories";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center text-center overflow-x-hidden bg-white text-slate-900 select-none py-12 sm:py-20 px-3 sm:px-6">
      <HeroBackground />
      <HeroHeader />
      <HeroCategories />
    </section>
  );
}
