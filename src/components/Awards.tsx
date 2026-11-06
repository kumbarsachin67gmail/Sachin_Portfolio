import React from "react";
import { Trophy, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/Reveal";

const award = {
  title: "Employee Appreciation Award",
  organization: "Edvoy Technologies",
  year: "2023",
  category: "Technical Excellence",
  description:
    "Awarded for building the Elasticsearch-backed search engine behind Edvoy's counsellor dashboards, which improved search response time by 20%.",
};

const Awards = () => {
  return (
    <section id="awards" aria-labelledby="awards-title" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading id="awards-title" title="Awards & Recognition" />

        <Reveal>
          <article className="rounded-2xl border bg-card text-card-foreground p-6 md:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="shrink-0 inline-flex p-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                <Trophy size={32} aria-hidden="true" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-2">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Calendar size={16} aria-hidden="true" />
                    {award.year}
                  </span>
                  <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">
                    {award.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{award.title}</h3>
                <p className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-4">
                  {award.organization}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
};

export default Awards;
