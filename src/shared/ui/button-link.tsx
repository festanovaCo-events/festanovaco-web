import Link from "next/link";
import { buttonLinkVariantClassName } from "@/shared/constants/button-link";
import type { ButtonLinkProps } from "@/shared/types/button-link.types";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  fullPage = false,
}: ButtonLinkProps) {
  const combinedClassName =
    `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all ${buttonLinkVariantClassName[variant]} ${className}`.trim();

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
