import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function ComingSoon() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%20FestanovaCo,%20quisiera%20informaci%C3%B3n%20para%20una%20invitaci%C3%B3n%20de%20Cumplea%C3%B1os";

  return (
    <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28 text-center">
      <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pill border border-honey-line shadow-xs backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-[11px] font-serif-luxury tracking-widest uppercase text-honey font-semibold">
          Colección Cumpleaños &bull; Próximamente
        </span>
      </div>

      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-ink leading-[1.15]">
        Invitaciones Digitales <br />
        <span className="italic font-normal text-honey">
          para tus Celebraciones
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted font-light tracking-wide max-w-xl mx-auto leading-relaxed">
        Celebra un año más con una invitación interactiva con GPS directo, confirmación de invitados y música para encender la fiesta.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-amber-800 hover:bg-amber-900 text-white font-medium text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
        >
          <span>Consultar por encargo</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <Link
          href={ROUTES.wedding}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-line-strong bg-chip text-ink text-xs sm:text-sm font-medium transition-all"
        >
          <span>Ver colección de Bodas</span>
        </Link>
      </div>
    </section>
  );
}
