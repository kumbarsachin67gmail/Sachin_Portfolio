import React, { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Copy, Github, Linkedin, Download } from "lucide-react";
import { Stagger, StaggerItem } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";
import { useTypewriter } from "@/hooks/use-typewriter";
import { trackPointer } from "@/lib/motion";
import { SITE, copyEmail, scrollToSection } from "@/lib/site";

const ROTATING = [
  "Backend & Distributed Systems",
  "Event-Driven Architecture",
  "AI Integration",
] as const;

const STATS = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Worked On" },
  { value: 4, suffix: "", label: "Engineers Led" },
];

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {reduce ? `${to}${suffix}` : `0${suffix}`}
      </span>
      <span className="sr-only">{`${to}${suffix}`}</span>
    </>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const typed = useTypewriter(ROTATING, { enabled: !reduce });

  return (
    <section
      id="home"
      aria-label="Introduction"
      onPointerMove={trackPointer}
      className="group/hero relative isolate overflow-hidden pt-28 pb-20 px-6 bg-[#0a0a0b] text-white"
    >
      {/* Slow floating blobs, dot grid and cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-dot-grid absolute inset-0" />
        <div className="spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100 motion-reduce:hidden" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl will-change-transform motion-safe:animate-blob" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl will-change-transform motion-safe:animate-blob [animation-delay:-6s]" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl will-change-transform motion-safe:animate-blob [animation-delay:-12s]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Info */}
          <Stagger className="text-center lg:text-left" gap={0.1}>
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-shimmer">
                  SACHIN KUMBAR
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-2xl font-semibold text-blue-100 mb-3">
                {SITE.title}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="font-mono text-base md:text-lg text-cyan-300 mb-6 min-h-[1.75rem]">
                <span aria-hidden="true">
                  <span className="text-cyan-500">&gt; </span>
                  {typed}
                  {!reduce && (
                    <span className="ml-0.5 inline-block w-2 animate-blink">
                      ▍
                    </span>
                  )}
                </span>
                <span className="sr-only">{ROTATING.join(", ")}</span>
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Senior Software Engineer with 6 years building backend-heavy
                enterprise SaaS in Node.js, TypeScript and AWS. I ship
                integration-heavy features end to end: document generation,
                third-party platform integrations (Smartsheet, Gmail) and
                production AI features with OpenAI and Azure OpenAI.
              </p>
            </StaggerItem>

            {/* Quick Stats */}
            <StaggerItem>
              <dl className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 max-w-lg mx-auto lg:mx-0">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <dd className="text-3xl md:text-4xl font-bold text-blue-300 mb-1 tabular-nums">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </dd>
                    <dt className="text-sm text-zinc-400">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Magnetic className="flex flex-col">
                  <a
                    href={SITE.resume}
                    download
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold shadow-lg shadow-blue-900/40 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] motion-reduce:transform-none"
                  >
                    <Download size={18} aria-hidden="true" />
                    Download Resume
                  </a>
                </Magnetic>
                <Magnetic className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold transition-all duration-200 hover:bg-blue-400 hover:text-slate-950 hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
                  >
                    Get In Touch
                  </button>
                </Magnetic>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Right Side - Profile & Contact */}
          <Stagger className="space-y-8" gap={0.12} delay={0.15}>
            <StaggerItem>
              <figure className="relative mx-auto w-64 sm:w-72 md:w-80">
                {/* Purple glow behind the cut-out portrait */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[-15%] top-[10%] bottom-0 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.8),rgba(99,102,241,0.3)_55%,transparent)] blur-2xl motion-safe:animate-glow"
                />
                <img
                  src="/profile-cutout.webp"
                  alt="Portrait of Sachin Kumbar"
                  width={567}
                  height={693}
                  // React 18 only forwards the lowercase attribute
                  {...{ fetchpriority: "high" }}
                  className="relative w-full h-auto [mask-image:linear-gradient(to_bottom,black_60%,transparent_95%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-2 text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
                  <span className="block text-xl md:text-2xl font-bold">
                    Sachin Kumbar
                  </span>
                  <span className="block text-sm md:text-base text-zinc-400">
                    Senior Software Engineer
                  </span>
                  <span className="block text-sm md:text-base text-zinc-300">
                    iSpace Technologies · Korn Ferry
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/15">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Contact Information
                </h2>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="group flex w-full items-center gap-4 p-4 bg-white/5 rounded-lg text-left transition-colors hover:bg-white/10"
                  >
                    <span className="p-2 bg-blue-500 rounded-full">
                      <Mail size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-zinc-400">
                        Email · click to copy
                      </span>
                      <span className="block font-semibold break-all">
                        {SITE.email}
                      </span>
                    </span>
                    <Copy
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-zinc-400 transition-colors group-hover:text-white"
                    />
                  </button>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <span className="p-2 bg-purple-500 rounded-full">
                      <MapPin size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-sm text-zinc-400">Location</div>
                      <div className="font-semibold">{SITE.location}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-2 gap-3">
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700 hover:scale-[1.02] motion-reduce:transform-none"
                  >
                    <Linkedin size={18} aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/20 rounded-lg font-semibold transition-all duration-200 hover:bg-white/20 hover:scale-[1.02] motion-reduce:transform-none"
                  >
                    <Github size={18} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Hero;
