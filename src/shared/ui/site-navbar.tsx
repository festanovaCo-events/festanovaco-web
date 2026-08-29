"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: ROUTES.howItWorks, label: "Cómo obtenerla" },
  { href: ROUTES.faq, label: "Preguntas frecuentes" },
  { href: ROUTES.contact, label: "Contacto" },
];

export function SiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.12] bg-[#221e1a]/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Brand Name */}
        <Link
          href={ROUTES.home}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50 rounded-lg"
        >
          <span className="font-serif-luxury text-xl sm:text-2xl font-normal tracking-tight text-white hover:text-amber-200 transition-colors">
            Festanova<span className="text-amber-300 font-semibold">Co</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-stone-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-stone-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-gradient-to-r from-[#fae2ab] via-[#ebd097] to-[#d8b066] hover:from-[#fff0cd] hover:to-[#e5c583] rounded-full shadow-[0_4px_16px_rgba(216,176,102,0.35)] hover:shadow-[0_6px_20px_rgba(216,176,102,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
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

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menú de navegación"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 text-stone-100 hover:text-white hover:bg-white/[0.14] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50"
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

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.10] bg-[#221e1a]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-stone-100 hover:text-white hover:bg-white/[0.10] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              href={ROUTES.contact}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-gradient-to-r from-[#fae2ab] to-[#d8b066] rounded-xl shadow-md active:scale-[0.98] transition-all"
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
