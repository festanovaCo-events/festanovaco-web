import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-footer py-12 px-4 sm:px-6 text-muted transition-colors duration-300">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs sm:text-sm">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <Link
            href={ROUTES.home}
            className="font-serif-luxury text-lg sm:text-xl font-medium tracking-tight text-ink hover:text-brand transition-colors"
          >
            Festanova<span className="text-brand-mid">Co</span>
          </Link>
          <p className="text-xs text-whisper">
            © {new Date().getFullYear()} FestanovaCo. Estudio de Invitaciones Digitales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs text-muted">
          <Link
            href={ROUTES.howItWorks}
            className="hover:text-link transition-colors"
          >
            Cómo obtenerla
          </Link>
          <Link
            href={ROUTES.faq}
            className="hover:text-link transition-colors"
          >
            Preguntas frecuentes
          </Link>
          <Link
            href={ROUTES.contact}
            className="hover:text-link transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
