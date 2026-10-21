"use client";

import { useTheme } from "@/shared/providers/theme-provider";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-stone-200/60 dark:border-white/15 bg-stone-100/50 dark:bg-white/[0.06] ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 dark:focus-visible:ring-amber-300/50 ${
        isDark
          ? "border-amber-300/30 bg-stone-800/80 text-amber-200 hover:bg-stone-700 hover:border-amber-300/60 shadow-[0_2px_10px_rgba(216,176,102,0.15)]"
          : "border-stone-200 bg-stone-100/80 text-stone-700 hover:bg-stone-200/80 hover:text-brand-deep shadow-xs"
      } ${className}`}
    >
      {isDark ? (
        // Sun Icon
        <svg
          className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon Icon
        <svg
          className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
