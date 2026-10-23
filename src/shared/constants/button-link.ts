import type { ButtonLinkVariant } from "@/shared/types/button-link.types";

export const buttonLinkVariantClassName: Record<ButtonLinkVariant, string> = {
  primary: "btn-primary",
  secondary:
    "bg-inset text-foreground hover:bg-chip-hover border border-line-soft",
  outline: "border border-line-strong bg-pill hover:bg-chip text-ink-soft",
};
