import React from "react";
import { ArrowRight, Award, Zap, Code, Users } from "lucide-react";

export function About() {
  const features = [
    {
      title: "Industry-relevant curriculum",
      desc: "Updated continuously with top tech requirements and modern frameworks.",
      icon: Code,
    },
    {
      title: "Hands-on practical experience",
      desc: "Write production-ready code with continuous integration and reviews.",
      icon: Zap,
    },
    {
      title: "Real-world capstones",
      desc: "Graduate with an authentic software portfolio that proves your capabilities.",
      icon: Award,
    },
    {
      title: "1:1 Mentorship & guidance",
      desc: "Direct support from working engineers and dedicated career coaches.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#F5FAFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Card: The One Academy Way */}
        <div className="relative bg-[#1B365D] rounded-[36px] p-10 lg:p-14 min-h-[460px] overflow-hidden shadow-2xl shadow-[#1B365D]/15">
          {/* Ambient blurred glowing circles */}
          <div className="absolute w-80 h-80 bg-[#005A9C] rounded-full blur-3xl opacity-60 -top-20 -right-20 pointer-events-none" />
          <div className="absolute w-60 h-60 bg-[#60C1E5] rounded-full blur-2xl opacity-20 -bottom-20 -left-20 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-[#A0E0EF] text-xs tracking-[3px] font-bold uppercase">
              THE ONE ACADEMY WAY
            </span>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-8">
              Don&apos;t just learn.
              <br />
              Create something
              <br />
              <span className="text-[#60C1E5]">extraordinary.</span>
            </h3>
            <p className="text-blue-100/75 mt-7 leading-relaxed max-w-md text-sm sm:text-base">
              We believe the fastest path to mastery is building authentic software. Replace passive video watching with active, guided engineering from day one.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center gap-3 mt-9 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#1B365D] font-bold text-sm backdrop-blur-md transition-all duration-300 border border-white/20"
            >
              Discover our approach <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Info: Why One Academy */}
        <div>
          <span className="text-xs font-bold tracking-[3px] text-[#005A9C] uppercase block mb-3">
            WHY ONE ACADEMY
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1B365D] leading-tight tracking-tight">
            Learning that
            <br />
            <span className="text-[#005A9C]">goes beyond</span>
            <br />
            classrooms.
          </h2>
          <p className="text-slate-500 leading-relaxed mt-6 text-base">
            Our mission is to help ambitious students and career-switchers develop the deep knowledge, problem-solving intuition, and practical engineering skills required to thrive in modern tech organizations.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((feature) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-5 rounded-2xl bg-white border border-slate-100/80 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EAF8FC] flex items-center justify-center text-[#005A9C] mb-3">
                    <IconComp size={19} />
                  </div>
                  <h4 className="text-sm font-bold text-[#1B365D] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
