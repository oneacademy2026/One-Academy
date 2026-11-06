"use client";

import React from "react";
import { ArrowRight, Play, Sparkles, Code2, Gamepad2, ShieldCheck } from "lucide-react";
import { HeroScene } from "@/components/canvas/HeroScene";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[780px] lg:min-h-[870px] pt-32 pb-20 overflow-hidden bg-[#F7FBFE]">
      {/* Ambient decorative glow blurs */}
      <div className="absolute top-16 right-0 w-[550px] h-[550px] bg-[#A0E0EF]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-48 left-[-100px] w-[400px] h-[400px] bg-[#60C1E5]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 items-center gap-12">
        {/* Left Text / Actions */}
        <div className="relative z-10 hero-content">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#A0E0EF] text-[#005A9C] text-xs font-bold mb-7 shadow-sm">
            <Sparkles size={14} className="text-[#60C1E5]" />
            <span>LEARN. BUILD. BECOME.</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-extrabold leading-[1.08] tracking-[-3px] text-[#1B365D]">
            Build skills.
            <br />
            <span className="text-[#005A9C]">Shape your</span>
            <br />
            future.
          </h1>

          <p className="mt-7 text-base lg:text-lg leading-relaxed text-slate-500 max-w-lg">
            Master in-demand technology through hands-on production projects: Fullstack with Next.js &amp; Three.js, Game Development in Unreal &amp; Unity, 3D Animation in Blender &amp; Maya, Core Languages (C++, Python, Java), and Cybersecurity.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Button href="#courses" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore Courses
            </Button>

            <Button href="#about" variant="outline" size="lg" icon={<Play size={16} />}>
              Discover Our Approach
            </Button>
          </div>

          {/* Social Proof Avatars & Metric */}
          <div className="flex items-center gap-5 mt-12 pt-6 border-t border-slate-200/60">
            <div className="flex -space-x-3">
              {[
                { bg: "#60C1E5", label: "3D" },
                { bg: "#005A9C", label: "UE" },
                { bg: "#1B365D", label: "C++" },
                { bg: "#A0E0EF", label: "SEC" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-[11px] font-black shadow-sm"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm text-[#1B365D]">
                Hands-on project methodology
              </p>
              <p className="text-xs text-slate-500">
                Live portfolio reviews &amp; verified project capstones
              </p>
            </div>
          </div>
        </div>

        {/* Right 3D Visual with Interactive Cards */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[620px] hero-visual">
          {/* 3D Scene Container */}
          <div className="absolute inset-0 z-0">
            <HeroScene />
          </div>

          {/* Floating Feature Card Top Right (Fullstack Web & 3D) */}
          <div className="pointer-events-auto absolute top-[8%] right-2 lg:right-6 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-white/80 transition-transform duration-300 hover:scale-105 z-10">
            <div className="w-9 h-9 rounded-xl bg-[#EAF8FC] flex items-center justify-center text-[#005A9C] mb-2.5">
              <Code2 size={20} />
            </div>
            <p className="text-xs font-bold text-[#1B365D]">Fullstack &amp; Three.js</p>
            <p className="text-[11px] text-slate-400 font-medium">Next.js, Prisma, SQL &amp; Mongo</p>
          </div>

          {/* Floating Feature Card Bottom Left (Game Dev & Animation) */}
          <div className="pointer-events-auto absolute bottom-[10%] left-0 sm:left-2 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl border border-white/80 transition-transform duration-300 hover:scale-105 z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EAF8FC] flex items-center justify-center text-[#005A9C]">
                <Gamepad2 size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1B365D]">Game Dev &amp; 3D</p>
                <p className="text-xs text-slate-400">Unreal, Unity, Blender, Maya</p>
              </div>
            </div>
          </div>

          {/* Floating Feature Card Center-Right (C++, Python & Security) */}
          <div className="pointer-events-auto hidden sm:flex absolute bottom-[38%] right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/80 items-center gap-2.5 z-10">
            <ShieldCheck className="text-[#60C1E5]" size={20} />
            <div>
              <p className="text-xs font-bold text-[#1B365D]">Core Code &amp; Security</p>
              <p className="text-[10px] text-slate-400">C++, Python, Java &amp; Defense</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator subtle gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#60C1E5]/60 to-transparent" />
    </section>
  );
}
