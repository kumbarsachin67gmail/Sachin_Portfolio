import type React from "react";
import type { Variants } from "framer-motion";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay?: number) => ({
    opacity: 1,
    y: 0,
    // Only set delay when given, so a parent's staggerChildren still applies
    transition: { duration: 0.5, ease: EASE_OUT, ...(delay ? { delay } : {}) },
  }),
};

export const stagger = (gap = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren } },
});

export const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" } as const;

/** Stores the pointer position as --x/--y on the element, for the .spotlight glow. */
export const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
  if (e.pointerType !== "mouse") return;
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};
