import type { ReactNode } from "react";

export type ButtonLinkVariant = "primary" | "secondary" | "outline";

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
  className?: string;
  /** Full document navigation. Use for Angular invitation routes (Vercel rewrites). */
  fullPage?: boolean;
};
