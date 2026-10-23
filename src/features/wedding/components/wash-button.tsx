"use client";

import { useState } from "react";
import Link from "next/link";
import {
  WASH_BUTTON_CLASS_NAME,
  washHotStyle,
} from "../constants/wash-button";
import type { WashButtonProps } from "../types/wash-button.types";

export function WashButton({
  href,
  external = false,
  children,
}: WashButtonProps) {
  const [hot, setHot] = useState(false);
  const style = hot ? washHotStyle : undefined;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={WASH_BUTTON_CLASS_NAME}
        style={style}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={WASH_BUTTON_CLASS_NAME}
      style={style}
      onMouseEnter={() => setHot(true)}
      onMouseLeave={() => setHot(false)}
    >
      {children}
    </Link>
  );
}
