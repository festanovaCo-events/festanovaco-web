"use client";

import { motion } from "motion/react";
import type { CurtainTransitionProps } from "@/shared/types/curtain-transition.types";

export function CurtainTransition({ children }: CurtainTransitionProps) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="curtain fixed inset-0 z-9999 flex items-center justify-center pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.8,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.15,
        }}
      >
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
            Festanova<span className="text-gold font-semibold">Co</span>
          </span>
          <div className="h-0.5 w-12 bg-gold" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-gold shadow-[0_0_15px_rgba(250,226,171,0.6)]" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="curtain-back fixed inset-0 z-9998 pointer-events-none"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1],
          delay: 0.08,
        }}
      />

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
