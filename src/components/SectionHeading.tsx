import React from "react";
import { Reveal } from "./motion/Reveal";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ id, title, subtitle }: SectionHeadingProps) => (
  <Reveal className="text-center mb-12">
    <h2
      id={id}
      className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
    >
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-2 mx-auto rounded-full" />
    {subtitle && (
      <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
