"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { NavLink } from "@/types";
import Image from "next/image";

const NAV_LINKS: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "About us", href: "#about" },
  { label: "Our approach", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#1B365D] flex items-center justify-center shadow-md shadow-[#1B365D]/15 group-hover:bg-[#005A9C] transition-colors">
            <Image src={"/Logo_One.png"} alt="Logo" width={100} height={100} className={"rounded-xl"} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-[#1B365D]">
            one<span className="text-[#60C1E5]">academy.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#005A9C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#005A9C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#1B365D] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#005A9C] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1B365D] hover:bg-slate-100 rounded-xl transition"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FC] text-[#005A9C] text-xs font-bold w-fit mb-2">
              <Sparkles size={12} /> Next Cohort Starts Soon
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-[#005A9C] py-2 border-b border-slate-50 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-[#1B365D] text-white py-3.5 rounded-full text-sm font-bold hover:bg-[#005A9C] transition"
            >
              Get Started <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

