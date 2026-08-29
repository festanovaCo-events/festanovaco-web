import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 dark:border-white/10 bg-white dark:bg-[#171412] py-12 px-4 sm:px-6 text-stone-600 dark:text-stone-300 transition-colors duration-300">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs sm:text-sm">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <Link
            href={ROUTES.home}
            className="font-serif-luxury text-lg sm:text-xl font-medium tracking-tight text-stone-900 dark:text-white hover:text-emerald-900 dark:hover:text-amber-200 transition-colors"
          >
            Festanova<span className="text-emerald-800 dark:text-amber-300">Co</span>
          </Link>
          <p className="text-xs text-stone-500 dark:text-amber-100/60">
            © {new Date().getFullYear()} FestanovaCo. Estudio de Invitaciones Digitales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs text-stone-600 dark:text-stone-300">
          <Link
            href={ROUTES.howItWorks}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            Cómo obtenerla
          </Link>
          <Link
            href={ROUTES.faq}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            Preguntas frecuentes
          </Link>
          <Link
            href={ROUTES.contact}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            Contacto
          </Link>
          <Link
            href={ROUTES.wedding}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            Bodas
          </Link>
          <Link
            href={ROUTES.fifteen}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            15 Años
          </Link>
          <Link
            href={ROUTES.birthday}
            className="hover:text-emerald-900 dark:hover:text-white transition-colors"
          >
            Cumpleaños
          </Link>
        </div>
      </div>
    </footer>
  );
}
