"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { usePageAnimations } from "@/hooks/usePageAnimations";

export default function HomePage() {
  usePageAnimations();

  return (
    <main className="min-h-screen flex flex-col bg-[#F7FBFE] overflow-hidden relative">
      {/* GSAP Powered Custom Cursor */}
      <CustomCursor />

      {/* Main Page Layout Sections */}
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Journey />
      <Projects />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
