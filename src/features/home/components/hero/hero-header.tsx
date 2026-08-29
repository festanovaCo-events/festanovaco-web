import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function HeroHeader() {
  return (
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4 text-center">
      {/* Top Pill Badge */}
      <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-violet-200/80 text-violet-700 shadow-sm">
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          ✨ Nueva Colección de Invitaciones Digitales
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-slate-900 leading-[1.12]">
        Invitaciones Digitales <br />
        <span className="font-serif-luxury bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
          que enamoran a tus invitados
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
        Elige tu categoría y comparte una experiencia digital interactiva, moderna e inolvidable con tus seres queridos.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3.5">
        <Link
          href={ROUTES.wedding}
          className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full shadow-[0_4px_16px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_22px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <span>Ver Colecciones</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          href={ROUTES.contact}
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full shadow-sm hover:shadow transition-all duration-200"
        >
          <span>Cotizar a Medida</span>
        </Link>
      </div>

      {/* Modern Subtle Divider */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 opacity-60">
        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-violet-300" />
        <div className="w-1.5 h-1.5 rotate-45 border border-violet-400 bg-white" />
        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-violet-300" />
      </div>
    </div>
  );
}
