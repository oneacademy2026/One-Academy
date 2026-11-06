"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatedSphere } from "./AnimatedSphere";
import { FloatingTechElements } from "./FloatingTechElements";
import "./TimerCompat";

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border-4 border-[#60C1E5]/30 border-t-[#005A9C] animate-spin" />
    </div>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          {/* Robust, self-contained multi-angle studio lighting */}
          <ambientLight intensity={1.4} />
          <hemisphereLight
            color="#EAF8FC"
            groundColor="#1B365D"
            intensity={0.9}
          />
          <directionalLight position={[5, 6, 5]} intensity={3.0} />
          <pointLight
            position={[-4, -2, 3]}
            intensity={2.4}
            color="#60C1E5"
          />
          <pointLight
            position={[3.5, -3, -2]}
            intensity={1.8}
            color="#005A9C"
          />
          <pointLight
            position={[0, 4, -2]}
            intensity={1.2}
            color="#A0E0EF"
          />

          {/* 3D Core Sphere with THREE.Timer and cursor parallax */}
          <AnimatedSphere />

          {/* Orbiting Satellites for Game Dev, Animation, and Code */}
          <FloatingTechElements />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default HeroScene;
