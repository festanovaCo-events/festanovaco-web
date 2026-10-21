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
  primary: "btn-primary",
  secondary:
    "bg-inset text-foreground hover:bg-chip-hover border border-line-soft",
  outline:
    "border border-line-strong bg-pill hover:bg-chip text-ink-soft",
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
