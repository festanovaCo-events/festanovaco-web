import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkVariant = "primary" | "secondary" | "outline";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
  /** Full document navigation. Use for Angular invitation routes (Vercel rewrites). */
  fullPage?: boolean;
};

const variantClassName: Record<ButtonLinkVariant, string> = {
  primary:
    "bg-emerald-900 hover:bg-emerald-950 dark:bg-linear-to-r dark:from-[#fae2ab] dark:via-[#ebd097] dark:to-[#d8b066] dark:hover:from-[#fff0cd] dark:hover:to-[#e5c583] text-white dark:text-stone-950 shadow-[0_4px_16px_rgba(27,67,50,0.2)] dark:shadow-[0_4px_16px_rgba(216,176,102,0.3)]",
  secondary:
    "bg-[#FAF8F5] dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-white/15",
  outline:
    "border border-[#D9CEBA] dark:border-white/20 bg-white/80 dark:bg-stone-800/60 hover:bg-white dark:hover:bg-stone-800 text-stone-800 dark:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  fullPage = false,
}: ButtonLinkProps) {
  const combinedClassName = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all ${variantClassName[variant]} ${className}`.trim();

  if (fullPage) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
}
