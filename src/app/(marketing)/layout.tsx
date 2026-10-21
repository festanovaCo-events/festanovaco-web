import type { ReactNode } from "react";
import { SiteNavbar } from "@/shared/ui/site-navbar";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen text-foreground flex flex-col font-sans transition-colors duration-300">
      <SiteNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
