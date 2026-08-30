import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function ComingSoon() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%20FestanovaCo,%20quisiera%20informaci%C3%B3n%20para%20una%20invitaci%C3%B3n%20de%2015%20A%C3%B1os";

  return (
    <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28 text-center">
      <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 dark:bg-stone-800/90 border border-rose-200 dark:border-rose-300/30 shadow-xs backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
        <span className="text-[11px] font-serif-luxury tracking-widest uppercase text-rose-800 dark:text-rose-200 font-semibold">
          Colección 15 Años &bull; Próximamente
        </span>
      </div>

      <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 dark:text-white leading-[1.15]">
        Invitaciones Digitales <br />
        <span className="italic font-normal text-rose-800 dark:text-rose-200">
          para tus Quince Años
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-300 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
        Estamos preparando una colección mágica e interactiva con música, confirmación RSVP, galería y pase digital para una noche inolvidable.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-rose-800 hover:bg-rose-900 text-white font-medium text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95"
        >
          <span>Pedir información por encargo</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <Link
          href={ROUTES.wedding}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-stone-300 dark:border-white/20 bg-white dark:bg-stone-800 text-stone-800 dark:text-white text-xs sm:text-sm font-medium transition-all"
        >
          <span>Ver colección de Bodas</span>
        </Link>
      </div>
    </section>
  );
}
