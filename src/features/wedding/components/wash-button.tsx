import Link from "next/link";
import { WASH_BUTTON_CLASS_NAME } from "../constants/wash-button";
import type { WashButtonProps } from "../types/wash-button.types";

export function WashButton({
  href,
  external = false,
  children,
}: WashButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={WASH_BUTTON_CLASS_NAME}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={WASH_BUTTON_CLASS_NAME}>
      {children}
    </Link>
  );
}
