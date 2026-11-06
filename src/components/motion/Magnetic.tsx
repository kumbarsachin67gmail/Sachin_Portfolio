import React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const PULL = 0.25; // fraction of the pointer offset the element follows
const MAX = 10; // px

/** Pulls its child slightly toward the mouse pointer while hovered. */
const Magnetic = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  if (reduce) return <div className={className}>{children}</div>;

  const clamp = (v: number) => Math.max(-MAX, Math.min(MAX, v));
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(clamp((e.clientX - rect.left - rect.width / 2) * PULL));
    y.set(clamp((e.clientY - rect.top - rect.height / 2) * PULL));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
