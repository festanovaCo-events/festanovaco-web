import { HeroBackground } from "./hero-background";
import { HeroHeader } from "./hero-header";
import { HeroCategories } from "./hero-categories";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center text-center overflow-x-hidden text-foreground select-none py-12 sm:py-20 px-3 sm:px-6 transition-colors duration-300">
      <HeroBackground />
      <HeroHeader />
      <HeroCategories />
    </section>
  );
}
