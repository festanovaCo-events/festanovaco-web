import type { ReactNode } from "react";
import { SiteNavbar } from "@/shared/ui/site-navbar";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background dark:bg-[#1c1917] text-stone-900 dark:text-stone-100 flex flex-col selection:bg-brand/20 dark:selection:bg-amber-400/30 selection:text-brand-deep dark:selection:text-white font-sans transition-colors duration-300">
      <SiteNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
