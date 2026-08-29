export function ContactSection() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%20FestanovaCo,%20quiero%20informaci%C3%B3n%20sobre%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento";

  return (
    <section
      id="contacto"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-stone-100"
    >
      <div className="rounded-3xl border border-amber-300/40 bg-gradient-to-b from-stone-800/80 via-stone-850/85 to-stone-900/90 backdrop-blur-2xl p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-center relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

        <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-amber-200 border border-amber-300/40 px-3.5 py-1 rounded-full bg-amber-950/40">
          Atención Personalizada
        </span>

        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mt-4 max-w-2xl mx-auto">
          Hagamos realidad la invitación de tu evento
        </h2>

        <p className="text-sm sm:text-base text-stone-200 font-light max-w-xl mx-auto mt-4 leading-relaxed">
          Cuéntanos sobre tu fecha, tipo de celebración y te asesoraremos paso a paso para crear un enlace inolvidable.
        </p>

        {/* Contact Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-[#fae2ab] via-[#ebd097] to-[#d8b066] hover:from-[#fff0cd] hover:to-[#e5c583] rounded-full shadow-[0_6px_25px_rgba(216,176,102,0.4)] hover:shadow-[0_8px_30px_rgba(216,176,102,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Escribir por WhatsApp</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="mailto:festanovaco.events@gmail.com"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-wider text-stone-100 hover:text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 rounded-full backdrop-blur-md transition-all duration-200"
          >
            <span>festanovaco.events@gmail.com</span>
          </a>
        </div>

        {/* Cities footprint */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-stone-300 font-light">
          <span>📍 Cartagena</span>
          <span>•</span>
          <span>Bogotá</span>
          <span>•</span>
          <span>Medellín</span>
          <span>•</span>
          <span>Santa Marta</span>
          <span>•</span>
          <span>Cali</span>
          <span>•</span>
          <span>Cobertura Nacional & Digital</span>
        </div>
      </div>
    </section>
  );
}
