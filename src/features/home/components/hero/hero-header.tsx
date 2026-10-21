export function HeroHeader() {
  return (
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4 text-center">
      <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pill border border-brand-line shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-mid animate-pulse" />
        <span className="text-[11px] sm:text-xs font-serif-luxury tracking-widest uppercase text-emphasis font-medium">
          Invitaciones Digitales Exclusivas
        </span>
      </div>

      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.12]">
        Celebra momentos únicos <br />
        <span className="italic font-normal text-brand">
          para tus Eventos
        </span>
      </h1>

      <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-muted font-light tracking-wide max-w-xl mx-auto leading-relaxed">
        Elige tu categoría perfecta y comparte una experiencia interactiva, elegante e inolvidable con tus invitados.
      </p>

      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 opacity-70">
        <div className="ornament-rule ornament-rule-right h-px w-12 sm:w-16" />
        <div className="ornament-gem w-1.5 h-1.5 rotate-45 border" />
        <div className="ornament-rule ornament-rule-left h-px w-12 sm:w-16" />
      </div>
    </div>
  );
}
