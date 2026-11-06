"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on mobile or touch-only devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial center origin
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    // High performance GSAP quickTo functions for 60fps tracking
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3.out" });

    let hasEntered = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasEntered) {
        hasEntered = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }

      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(dot, { scale: 0.6, duration: 0.15 });
      gsap.to(ring, { scale: 0.85, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      hasEntered = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    // Interactive target detection (links, buttons, canvas, cards)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.closest("a, button, input, textarea, .course-card, .journey-card, canvas") !== null;

      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.7,
          borderColor: "#005A9C",
          backgroundColor: "rgba(96, 193, 229, 0.12)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0.4,
          backgroundColor: "#60C1E5",
          duration: 0.2,
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          borderColor: "#60C1E5",
          backgroundColor: "transparent",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "#005A9C",
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#005A9C] pointer-events-none"
      />

      {/* Trailing Fluid Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-[#60C1E5] pointer-events-none backdrop-blur-[0.5px] shadow-sm shadow-[#60C1E5]/20"
      />
    </div>
  );
}
