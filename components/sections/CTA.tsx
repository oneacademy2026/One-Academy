import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto bg-[#1B365D] rounded-[36px] px-8 py-20 lg:px-20 text-center relative overflow-hidden shadow-2xl shadow-[#1B365D]/20">
        {/* Glow Spheres */}
        <div className="absolute w-80 h-80 bg-[#005A9C] rounded-full blur-[100px] opacity-60 -top-40 -left-20 pointer-events-none" />
        <div className="absolute w-80 h-80 bg-[#60C1E5] rounded-full blur-[120px] opacity-25 -bottom-40 -right-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#60C1E5] mx-auto mb-7">
            <Sparkles size={24} />
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Your future is built
            <br />
            <span className="text-[#60C1E5]">one skill at a time.</span>
          </h2>

          <p className="text-blue-100/75 mt-7 max-w-xl mx-auto leading-relaxed text-base">
            Take the first step towards building a future in technology. Let&apos;s make it happen together with world-class curriculum and mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="mailto:hello@oneacademy.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#60C1E5] text-[#1B365D] font-extrabold text-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Journey <ArrowRight size={18} />
            </a>

            <a
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition duration-300 border border-white/20"
            >
              Browse Curriculum
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs font-semibold text-blue-200/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#60C1E5]" /> Flexible Payment Plans
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#60C1E5]" /> 1:1 Live Mentorship
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#60C1E5]" /> Verified Certificate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

