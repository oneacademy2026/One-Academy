"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useThreeTimer } from "@/hooks/useThreeTimer";

export function AnimatedSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const coreSphereRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  // Modern THREE.Timer hook for delta calculation
  const { update } = useThreeTimer();

  useFrame((state) => {
    const { delta } = update();

    // Responsive mouse parallax tilt
    if (groupRef.current) {
      const targetRotationY = state.pointer.x * 0.4;
      const targetRotationX = -state.pointer.y * 0.3;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
    }

    // Continuous sphere self-rotation
    if (coreSphereRef.current) {
      coreSphereRef.current.rotation.x += delta * 0.15;
      coreSphereRef.current.rotation.y += delta * 0.22;
    }

    // Wireframe counter-rotation
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.1;
      wireframeRef.current.rotation.z += delta * 0.08;
    }

    // Outer primary ring rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.22;
      outerRingRef.current.rotation.x += delta * 0.09;
    }

    // Inner accented ring counter-rotation
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.28;
      innerRingRef.current.rotation.y += delta * 0.14;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Animated Core Sphere */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
        {/* Core Material with Distort Shader */}
        <Sphere ref={coreSphereRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#60C1E5"
            roughness={0.18}
            metalness={0.35}
            distort={0.35}
            speed={2.2}
          />
        </Sphere>

        {/* Outer translucent geometric wireframe cage */}
        <mesh ref={wireframeRef} scale={1.55}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#005A9C"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>
      </Float>

      {/* Primary Metallic Orbit Ring */}
      <mesh ref={outerRingRef} rotation={[1.1, 0.3, 0.4]}>
        <torusGeometry args={[2.05, 0.016, 16, 160]} />
        <meshStandardMaterial
          color="#005A9C"
          metalness={0.9}
          roughness={0.15}
          emissive="#005A9C"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Secondary Cyan Glowing Orbit Ring */}
      <mesh ref={innerRingRef} rotation={[0.5, 1.1, 0.2]}>
        <torusGeometry args={[2.32, 0.01, 16, 160]} />
        <meshStandardMaterial
          color="#A0E0EF"
          metalness={0.85}
          roughness={0.2}
          emissive="#60C1E5"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}
