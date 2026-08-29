import Link from "next/link";

import { ROUTES } from "@/shared/config/routes";

const navItems = [
  { href: ROUTES.home, label: "Inicio" },
  { href: ROUTES.wedding, label: "Bodas" },
  { href: ROUTES.fifteen, label: "15 Años" },
  { href: ROUTES.birthday, label: "Cumpleaños" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href={ROUTES.home} className="text-lg font-semibold tracking-tight text-stone-900">
          festanovaco
        </Link>
        <nav className="flex gap-6 text-sm text-stone-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-stone-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
