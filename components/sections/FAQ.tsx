"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 bg-[#F5FAFD] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="GOT QUESTIONS?"
          title="Frequently asked questions"
          highlightText="."
          description="Everything you need to know about enrollment, course structures, 1:1 mentorship, and job assistance."
          align="center"
        />

        <div className="space-y-4 mt-14">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1B365D] hover:text-[#005A9C] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#60C1E5] shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#005A9C]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

