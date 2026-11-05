import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/site";

const BackToTop = () => {
  const [visible, setVisible] = useState(() => window.scrollY > 600);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 600));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-br from-brand to-brand-2 p-3 text-white shadow-lg transition-transform hover:scale-110 dark:text-slate-950"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
