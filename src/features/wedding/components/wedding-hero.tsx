import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function WeddingHero() {
  return (
    <section className="relative w-full pt-12 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface/90 dark:bg-stone-800/90 border border-line-strong dark:border-amber-300/30 shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md">
          <Link
            href={ROUTES.home}
            className="text-[11px] font-medium text-stone-500 hover:text-brand dark:text-stone-400 dark:hover:text-amber-200 transition-colors"
          >
            Inicio
          </Link>
          <span className="text-stone-300 dark:text-stone-600 text-xs">&bull;</span>
          <span className="text-[11px] font-serif-luxury tracking-widest uppercase text-brand dark:text-amber-200 font-semibold">
            Colección Bodas
          </span>
        </div>

        <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 dark:text-white leading-[1.14]">
          Invitaciones Digitales <br className="hidden xs:inline" />
          <span className="italic font-normal text-brand dark:text-amber-200">
            para tu Matrimonio
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Diseños de papelería nupcial digital interactiva con música de fondo,
          confirmación RSVP en vivo, ubicación GPS y álbum de fotos. Explora
          nuestras plantillas exclusivas.
        </p>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3 opacity-70">
          <div className="h-px w-16 bg-accent dark:bg-transparent dark:bg-linear-to-r dark:from-transparent dark:to-amber-300/70" />
          <div className="w-1.5 h-1.5 rotate-45 border border-accent dark:border-amber-300 bg-background dark:bg-amber-200" />
          <div className="h-px w-16 bg-accent dark:bg-transparent dark:bg-linear-to-l dark:from-transparent dark:to-amber-300/70" />
        </div>
      </div>
    </section>
  );
}
