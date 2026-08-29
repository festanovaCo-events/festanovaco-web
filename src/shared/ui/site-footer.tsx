import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs sm:text-sm text-stone-500">
        <div>
          <p>© {new Date().getFullYear()} FestanovaCo. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <Link href={ROUTES.home} className="hover:text-stone-900 transition-colors">
            Inicio
          </Link>
          <Link href={ROUTES.wedding} className="hover:text-stone-900 transition-colors">
            Bodas
          </Link>
          <Link href={ROUTES.fifteen} className="hover:text-stone-900 transition-colors">
            15 Años
          </Link>
          <Link href={ROUTES.birthday} className="hover:text-stone-900 transition-colors">
            Cumpleaños
          </Link>
        </div>
      </div>
    </footer>
  );
}
