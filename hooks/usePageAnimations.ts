"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimations() {
  useEffect(() => {
    // Respect user's motion preferences
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Hero Content Initial Entrance Animation
      gsap.from(".hero-content > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      // 2. Hero 3D Visual Scale & Reveal
      gsap.from(".hero-visual", {
        scale: 0.88,
        opacity: 0,
        duration: 1.2,
        delay: 0.1,
        ease: "power3.out",
        clearProps: "opacity",
      });

      // 3. Subtle Hero Parallax on Scroll
      gsap.to(".hero-visual", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-visual",
          start: "top center",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 4. Section Headings ScrollTrigger reveal
      const sectionHeadings = gsap.utils.toArray<HTMLElement>(".section-heading");
      sectionHeadings.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          clearProps: "transform,opacity",
        });
      });

      // 5. Course & Journey Cards Staggered Reveal
      const cardContainers = gsap.utils.toArray<HTMLElement>(
        "#courses .grid, #journey .grid, #projects .grid"
      );
      cardContainers.forEach((container) => {
        const cards = container.children;
        gsap.from(cards, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
          clearProps: "transform,opacity",
        });
      });

      // Refresh ScrollTrigger calculations after initial frame settlement
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);

      return () => clearTimeout(timer);
    });

    return () => ctx.revert();
  }, []);
}
