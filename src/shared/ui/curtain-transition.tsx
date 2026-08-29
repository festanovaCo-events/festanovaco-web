"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CurtainTransitionProps {
  children: ReactNode;
}

export function CurtainTransition({ children }: CurtainTransitionProps) {
  return (
    <>
      {/* Primary Deep Emerald Curtain */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0d2217] dark:bg-[#131211] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.8,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.15,
        }}
      >
        {/* Subtle Gold Brand Logo / Crest on Curtain */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1,
          }}
        >
          <span className="font-serif-luxury text-2xl sm:text-3xl font-normal tracking-wider text-white">
            Festanova<span className="text-[#fae2ab] font-semibold">Co</span>
          </span>
          <div className="h-0.5 w-12 bg-linear-to-r from-transparent via-[#fae2ab] to-transparent" />
        </motion.div>

        {/* Bottom Gold Trim Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-transparent via-[#ebd097] to-transparent shadow-[0_0_15px_rgba(250,226,171,0.6)]" />
      </motion.div>

      {/* Secondary Gold Accent Curtain Layer for depth */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 z-9998 bg-linear-to-b from-[#1b4332] to-[#0f291e] dark:from-[#24211e] dark:to-[#171513] pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.08,
        }}
      />

      {/* Page Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 1, 0.5, 1],
          delay: 0.35,
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
