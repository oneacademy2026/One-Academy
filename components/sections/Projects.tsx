import React from "react";
import { Globe, Code2 } from "lucide-react";
import { PROJECTS_DATA } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#F5FAFD] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="LEARN BY BUILDING"
          title="Ideas into reality"
          highlightText="."
          description="Go far beyond classroom theory. Build deployable applications that demonstrate your skills to recruiters and hiring managers."
          actionLink={{
            href: "#courses",
            label: "Explore all student projects",
          }}
        />

        {/* Featured Showcase Banners */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-[#1B365D] rounded-[32px] p-9 sm:p-11 min-h-[300px] relative overflow-hidden group shadow-xl shadow-[#1B365D]/10">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#60C1E5] mb-8">
                <Globe size={26} />
              </div>
              <Badge variant="accent" className="mb-4">
                Full-Stack Architecture
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Build digital experiences.
              </h3>
              <p className="text-blue-100/70 mt-3 text-sm leading-relaxed max-w-sm">
                Architect performant web applications with responsive interfaces, microservice pipelines, and robust database layers.
              </p>
            </div>
            <span className="absolute -right-6 -bottom-12 text-[170px] font-black text-white/5 select-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
              01
            </span>
          </div>

          <div className="bg-[#A0E0EF] rounded-[32px] p-9 sm:p-11 min-h-[300px] relative overflow-hidden group shadow-xl shadow-[#A0E0EF]/20">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center text-[#005A9C] mb-8">
                <Code2 size={26} />
              </div>
              <Badge variant="secondary" className="mb-4 bg-white/60">
                Production Ready
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B365D] leading-snug">
                Solve real problems.
              </h3>
              <p className="text-[#1B365D]/75 mt-3 text-sm leading-relaxed max-w-sm">
                Apply your expertise to authentic client briefs and build a distinctive portfolio that gets you noticed.
              </p>
            </div>
            <span className="absolute -right-6 -bottom-12 text-[170px] font-black text-white/25 select-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
              02
            </span>
          </div>
        </div>

        {/* Real Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#60C1E5] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#005A9C] tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    Project {project.number}
                  </span>
                </div>

                <h4 className="text-xl font-extrabold text-[#1B365D] mb-3">
                  {project.title}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold bg-[#F7FBFE] text-slate-600 px-3 py-1 rounded-md border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
