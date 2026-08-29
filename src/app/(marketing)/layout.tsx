import type { ReactNode } from "react";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      <main className="flex-1">{children}</main>
    </div>
  );
}
