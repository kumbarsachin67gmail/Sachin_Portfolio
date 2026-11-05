import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { EASE_OUT } from "@/lib/motion";
import { SECTIONS, scrollToSection } from "@/lib/site";
import { cn } from "@/lib/utils";

const SECTION_IDS = SECTIONS.map((s) => s.id);
const IS_MAC =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/.test(navigator.userAgent);

type HeaderProps = {
  onOpenPalette: () => void;
};

const Header = ({ onOpenPalette }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const active = useActiveSection(SECTION_IDS);
  const reduce = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Over the dark hero the header is transparent with light text
  const solid = scrolled || isMenuOpen;

  const go = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const linkClass = (id: string) =>
    cn(
      "relative py-1 text-sm font-medium transition-colors",
      solid
        ? "text-muted-foreground hover:text-foreground"
        : "text-white/75 hover:text-white",
      active === id && (solid ? "text-foreground" : "text-white"),
    );

  const iconButtonClass = solid
    ? "text-muted-foreground hover:text-foreground hover:bg-accent"
    : "text-white/80 hover:text-white hover:bg-white/10";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 border-b",
        solid
          ? "bg-background/80 backdrop-blur-md shadow-sm border-border"
          : "bg-transparent border-transparent",
      )}
    >
      {/* Scroll progress */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand to-brand-2"
        style={{ scaleX: reduce ? scrollYProgress : progress }}
      />

      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go("home")}
            className="text-xl font-bold rounded-md"
            aria-label="Sachin Kumbar, back to top"
          >
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r",
                solid ? "from-brand to-brand-2" : "from-blue-300 to-purple-300",
              )}
            >
              Sachin Kumbar
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {SECTIONS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={linkClass(item.id)}
                  >
                    {item.label}
                    {active === item.id && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand to-brand-2"
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-keyshortcuts={IS_MAC ? "Meta+K" : "Control+K"}
              className={cn(
                "flex items-center gap-2 rounded-full p-2 sm:px-3 transition-colors",
                iconButtonClass,
              )}
            >
              <Search size={16} aria-hidden="true" />
              <span className="sr-only">Open command palette</span>
              <kbd className="hidden sm:inline font-mono text-xs">
                {IS_MAC ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>
            <ThemeToggle className={iconButtonClass} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className={cn(
                "lg:hidden rounded-full p-2 transition-colors",
                iconButtonClass,
              )}
            >
              {isMenuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Primary"
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <ul className="mt-3 flex flex-col border-t pt-3 pb-2">
                {SECTIONS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item.id)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={cn(
                        "w-full rounded-md px-2 py-2.5 text-left font-medium transition-colors hover:bg-accent",
                        active === item.id
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
