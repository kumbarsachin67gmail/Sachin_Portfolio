import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

/** Fades and slides a block up the first time it scrolls into view. */
export const Reveal = ({
  children,
  className,
  delay,
}: BaseProps & { delay?: number }) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

/** Parent that staggers the reveal of its <StaggerItem> children. */
export const Stagger = ({
  children,
  className,
  as = "div",
  gap = 0.08,
  delay = 0,
}: BaseProps & { as?: "div" | "ul"; gap?: number; delay?: number }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = (as === "ul" ? motion.ul : motion.div) as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={stagger(gap, delay)}
    >
      {children}
    </MotionTag>
  );
};

export const StaggerItem = ({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: BaseProps & { as?: "div" | "li"; variants?: Variants }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = (as === "li" ? motion.li : motion.div) as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
};
