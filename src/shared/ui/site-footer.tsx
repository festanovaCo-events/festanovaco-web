import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { SITE_COPYRIGHT_LABEL } from "@/shared/data/brand";
import { homeNavItems } from "@/shared/data/nav-items";

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
            © {new Date().getFullYear()} {SITE_COPYRIGHT_LABEL}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-xs text-muted">
          {homeNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-link transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
