import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-100">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#1B365D] flex items-center justify-center">
                <span className="text-white text-xl font-extrabold">O</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#1B365D]">
                one<span className="text-[#60C1E5]">academy.</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm mt-4 max-w-sm leading-relaxed">
              Empowering the next generation of builders, engineers, and digital innovators through project-based mastery and expert mentorship.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* GitHub */}
              <a
                href="https://github.com/oneacademy2026"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#005A9C] hover:text-white flex items-center justify-center text-slate-600 transition duration-200"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://www.instagram.com/one_academy_2026/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#60C1E5] hover:text-white flex items-center justify-center text-slate-600 transition duration-200"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/one-academy-405863449/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#005A9C] hover:text-white flex items-center justify-center text-slate-600 transition duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:oneacademy2k26@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#1B365D] hover:text-white flex items-center justify-center text-slate-600 transition duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Column 1: Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#1B365D] mb-4">
              Programs
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#courses" className="hover:text-[#005A9C] transition">
                  Fullstack (Next.js &amp; Three.js)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#005A9C] transition">
                  Game Dev (Unreal &amp; Unity)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#005A9C] transition">
                  3D Animation (Blender &amp; Maya)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#005A9C] transition">
                  C++, Python &amp; Java Mastery
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#005A9C] transition">
                  Cybersecurity &amp; Defense
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Academy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#1B365D] mb-4">
              Academy
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-[#005A9C] transition">
                  About One Academy
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#005A9C] transition">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#005A9C] transition">
                  Student Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#005A9C] transition">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#005A9C] transition">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact & Status */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#1B365D] mb-4">
              Admissions
            </h4>
            <div className="p-4 rounded-2xl bg-[#F7FBFE] border border-[#EAF8FC] space-y-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
              <span className="text-xs font-bold text-[#1B365D]">
                Applications Open
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Join our next live cohort starting soon. Limited seats per mentor track.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-[#005A9C] inline-flex items-center gap-1 hover:underline pt-1"
              >
                Apply Now <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} One Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-600 transition">
              Honor Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
