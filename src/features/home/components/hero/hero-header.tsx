export function HeroHeader() {
  return (
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4 text-center">
      {/* Main Headline */}
      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-[1.12]">
        Invitaciones Digitales <br />
        <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-[#e5c583]">
          para tus Eventos
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-amber-50/95 font-light tracking-wide max-w-xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] leading-relaxed">
        Elige la categoría perfecta y comparte una experiencia interactiva, elegante e inolvidable con tus invitados.
      </p>

      {/* Warm Golden Divider */}
      <div className="mt-3.5 sm:mt-5 flex items-center justify-center gap-3 opacity-80">
        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-amber-300/70" />
        <div className="w-1.5 h-1.5 rotate-45 border border-amber-300 bg-amber-200" />
        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-amber-300/70" />
      </div>
    </div>
  );
}
