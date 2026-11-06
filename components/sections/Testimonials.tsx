import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="STUDENT SUCCESS"
          title="Loved by builders"
          highlightText="worldwide."
          description="Read authentic experiences from alumni who transformed their careers and landed roles at top technology companies."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#F7FBFE] border border-slate-100 hover:border-[#60C1E5] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={24} className="text-[#A0E0EF]/60" />
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-8">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-200/50 flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${t.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-md`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1B365D]">{t.name}</h4>
                  <p className="text-xs text-slate-400">
                    {t.role} at{" "}
                    <span className="font-semibold text-[#005A9C]">
                      {t.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
