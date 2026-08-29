import type { ReactNode } from "react";
import Link from "next/link";

type ButtonLinkVariant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  /** Full document navigation. Use for Angular invitation routes (Vercel rewrites). */
  fullPage?: boolean;
};

const variantClassName: Record<ButtonLinkVariant, string> = {
  primary: "bg-teal-700 text-white hover:bg-teal-800",
  secondary: "bg-amber-300 text-stone-900 hover:bg-amber-200",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  fullPage = false,
}: ButtonLinkProps) {
  const className = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${variantClassName[variant]}`;

  if (fullPage) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
