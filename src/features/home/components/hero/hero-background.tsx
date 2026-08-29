import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      {/* Background celebration image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="FestanovaCo Celebraciones y Eventos"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] scale-[1.0] filter brightness-[0.88] contrast-[1.10]"
        />
        {/* Dark atmospheric overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/85 pointer-events-none" />
      </div>

      {/* Hanging light string glow at very top */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-linear-to-b from-amber-300/20 to-transparent blur-xl sm:blur-2xl pointer-events-none z-10" />
    </>
  );
}
