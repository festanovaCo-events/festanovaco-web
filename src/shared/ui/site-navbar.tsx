"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";
import { ThemeToggle } from "@/shared/ui/theme-toggle";

interface NavItem {
  href: string;
  label: string;
}

const homeNavItems: NavItem[] = [
  { href: ROUTES.howItWorks, label: "Cómo obtenerla" },
  { href: ROUTES.faq, label: "Preguntas frecuentes" },
  { href: ROUTES.contact, label: "Contacto" },
];

const weddingNavItems: NavItem[] = [
  { href: ROUTES.weddingFeatures, label: "Características" },
  { href: ROUTES.weddingCatalog, label: "Catálogo" },
  { href: ROUTES.weddingCustom, label: "Personalizable" },
];

export function SiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isWeddingPage = pathname.startsWith("/wedding");
  const currentNavItems = isWeddingPage ? weddingNavItems : homeNavItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 dark:border-white/15 bg-surface/90 dark:bg-[#221e1a]/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Brand Name */}
        <Link
          href={ROUTES.home}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 dark:focus-visible:ring-amber-300/50 rounded-lg"
        >
          <span className="font-serif-luxury text-xl sm:text-2xl font-normal tracking-tight text-stone-900 dark:text-white hover:text-brand dark:hover:text-amber-200 transition-colors">
            Festanova<span className="text-brand-mid dark:text-amber-300 font-semibold">Co</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
          {currentNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-stone-600 dark:text-stone-300 hover:text-brand dark:hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions (Theme Toggle + CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href={isWeddingPage ? ROUTES.weddingCustom : ROUTES.contact}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white dark:text-stone-900 bg-brand hover:bg-brand-mid dark:bg-linear-to-r dark:from-[#fae2ab] dark:via-[#ebd097] dark:to-[#d8b066] dark:hover:from-[#fff0cd] dark:hover:to-[#e5c583] rounded-full shadow-[0_4px_16px_var(--shadow-brand-strong)] dark:shadow-[0_4px_16px_rgba(216,176,102,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Pedir Asesoría</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Right Controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Alternar menú de navegación"
            className="flex items-center justify-center size-10 rounded-xl bg-stone-100 dark:bg-white/10 border border-stone-200 dark:border-white/15 text-stone-700 dark:text-stone-100 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 dark:focus-visible:ring-amber-300/50"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-white/10 bg-surface/98 dark:bg-[#221e1a]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-stone-700 dark:text-stone-100 hover:text-brand-deep dark:hover:text-white hover:bg-brand-muted/50 dark:hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href={isWeddingPage ? ROUTES.weddingCustom : ROUTES.contact}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white dark:text-stone-900 bg-brand dark:bg-linear-to-r dark:from-[#fae2ab] dark:to-[#d8b066] rounded-xl shadow-md active:scale-[0.98] transition-all"
            >
              <span>Pedir Asesoría</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
