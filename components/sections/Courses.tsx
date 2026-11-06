"use client";

import React, { useState } from "react";
import { ArrowUpRight, Clock, Star, Users, CheckCircle2 } from "lucide-react";
import { COURSES_DATA } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CourseCategory } from "@/types";

export function Courses() {
  const [activeTab, setActiveTab] = useState<CourseCategory>("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  const tabs: { label: string; value: CourseCategory }[] = [
    { label: "All Offerings", value: "all" },
    { label: "Fullstack Web & 3D", value: "fullstack" },
    { label: "Game Dev (Unreal / Unity)", value: "gamedev" },
    { label: "3D Animation (Blender / Maya)", value: "animation" },
    { label: "C++, Python & Java", value: "programming" },
    { label: "Cybersecurity", value: "cybersecurity" },
  ];

  return (
    <section id="courses" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="OUR SPECIALIZED OFFERINGS"
          title="Practical industry courses"
          highlightText="."
          description="Focused, project-based engineering tracks designed to build verified production skills in fullstack web, game engines, 3D character pipelines, core systems, and cybersecurity."
          actionLink={{
            href: "#contact",
            label: "Speak with an advisor",
          }}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-[#1B365D] text-white shadow-md shadow-[#1B365D]/20 scale-[1.02]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-[#1B365D]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => {
            const IconComponent = course.icon;

            return (
              <div
                key={course.id}
                className="course-card group border border-slate-100 p-8 rounded-3xl bg-white hover:border-[#60C1E5] hover:shadow-[0_22px_55px_rgba(27,54,93,0.09)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-[#005A9C] group-hover:bg-[#005A9C] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent size={26} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">{course.level}</Badge>
                      <span className="text-xs font-bold text-slate-300">
                        {course.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subheadline */}
                  <h3 className="text-xl font-extrabold text-[#1B365D] group-hover:text-[#005A9C] transition-colors">
                    {course.title}
                  </h3>

                  {course.headline && (
                    <p className="text-xs font-bold text-[#005A9C] mt-1 mb-3">
                      {course.headline}
                    </p>
                  )}

                  <p className="text-sm text-slate-500 leading-relaxed min-h-[64px]">
                    {course.description}
                  </p>

                  {/* Course Details (Duration, Rating, Students) */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mt-4 pt-3 border-t border-slate-50">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#60C1E5]" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star size={14} className="text-amber-500 fill-amber-500" /> {course.rating}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-slate-400" /> {course.studentsCount}+
                    </span>
                  </div>

                  {/* Curriculum Highlights */}
                  {course.curriculumHighlights && (
                    <div className="mt-5 space-y-1.5 pt-3 border-t border-slate-100/70">
                      {course.curriculumHighlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={13} className="text-[#005A9C] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold bg-[#F1F7FA] text-[#005A9C] px-2.5 py-1 rounded-full border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="border-t border-slate-100 mt-7 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B365D] group-hover:text-[#005A9C] transition-colors">
                    View Course Syllabus
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#005A9C] group-hover:bg-[#005A9C] group-hover:text-white transition-all">
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
