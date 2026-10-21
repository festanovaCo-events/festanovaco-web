export function HeroHeader() {
  return (
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4 text-center">
      {/* Top Badge */}
      <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface/80 dark:bg-stone-800/80 border border-line-strong dark:border-amber-300/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-none backdrop-blur-md transition-colors">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-mid dark:bg-amber-300 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-serif-luxury tracking-widest uppercase text-stone-700 dark:text-amber-100 font-medium">
          Invitaciones Digitales Exclusivas
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 dark:text-white leading-[1.12]">
        Celebra momentos únicos <br />
        <span className="italic font-normal text-brand dark:text-amber-200">
          para tus Eventos
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-600 dark:text-amber-50/90 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
        Elige tu categoría perfecta y comparte una experiencia interactiva, elegante e inolvidable con tus invitados.
      </p>

      {/* Refined Divider */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 opacity-70">
        <div className="h-px w-12 sm:w-16 bg-accent dark:bg-transparent dark:bg-linear-to-r dark:from-transparent dark:to-amber-300/70" />
        <div className="w-1.5 h-1.5 rotate-45 border border-accent dark:border-amber-300 bg-background dark:bg-amber-200" />
        <div className="h-px w-12 sm:w-16 bg-accent dark:bg-transparent dark:bg-linear-to-l dark:from-transparent dark:to-amber-300/70" />
      </div>
    </div>
  );
}
