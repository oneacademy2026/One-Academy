import React from "react";
import { JOURNEY_STEPS } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Journey() {
  return (
    <section id="journey" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="YOUR LEARNING JOURNEY"
          title="From beginner to builder"
          highlightText="."
          description="A structured four-stage transformation designed to take you from core foundations to shipping production-level code."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.number}
              className="journey-card relative p-8 rounded-3xl bg-[#F5FAFD] border border-slate-100 hover:border-[#60C1E5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-extrabold text-[#A0E0EF]">
                    {step.number}
                  </span>
                  <Badge variant="accent">{step.highlight}</Badge>
                </div>

                <h3 className="text-xl font-extrabold text-[#1B365D] mt-8 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/50 flex items-center gap-2 text-xs font-bold text-[#005A9C]">
                <span>Phase {step.number}</span>
                <span className="text-slate-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

