import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function WeddingHero() {
  return (
    <section className="relative w-full pt-12 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pill border border-brand-line shadow-[var(--shadow-soft)] backdrop-blur-md">
          <Link
            href={ROUTES.home}
            className="text-[11px] font-medium text-subtle hover:text-brand transition-colors"
          >
            Inicio
          </Link>
          <span className="text-bullet text-xs">&bull;</span>
          <span className="text-[11px] font-serif-luxury tracking-widest uppercase text-brand font-semibold">
            Colección Bodas
          </span>
        </div>

        <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.14]">
          Invitaciones Digitales <br className="hidden xs:inline" />
          <span className="italic font-normal text-brand">
            para tu Matrimonio
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Diseños de papelería nupcial digital interactiva con música de fondo,
          confirmación RSVP en vivo, ubicación GPS y álbum de fotos. Explora
          nuestras plantillas exclusivas.
        </p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 opacity-70">
          <div className="ornament-rule ornament-rule-right h-px w-16" />
          <div className="ornament-gem w-1.5 h-1.5 rotate-45 border" />
          <div className="ornament-rule ornament-rule-left h-px w-16" />
        </div>
      </div>
    </section>
  );
}
