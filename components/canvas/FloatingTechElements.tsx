"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { useThreeTimer } from "@/hooks/useThreeTimer";

export function FloatingTechElements() {
  const gameOrbRef = useRef<THREE.Mesh>(null);
  const animCubeRef = useRef<THREE.Mesh>(null);
  const codeGemRef = useRef<THREE.Mesh>(null);
  const particlesGroupRef = useRef<THREE.Group>(null);

  const { update } = useThreeTimer();

  useFrame(() => {
    const { delta, elapsed } = update();

    // 1. Game Dev Satellite (Orbiting Octahedron)
    if (gameOrbRef.current) {
      gameOrbRef.current.position.x = Math.sin(elapsed * 0.65) * 2.7;
      gameOrbRef.current.position.y = Math.cos(elapsed * 0.5) * 1.3;
      gameOrbRef.current.position.z = Math.cos(elapsed * 0.65) * 1.6;
      gameOrbRef.current.rotation.x += delta * 1.1;
      gameOrbRef.current.rotation.y += delta * 0.9;
    }

    // 2. 3D Animation Satellite (Orbiting Torus Knot / Cube)
    if (animCubeRef.current) {
      animCubeRef.current.position.x = Math.cos(elapsed * 0.55 + 2) * 2.5;
      animCubeRef.current.position.y = Math.sin(elapsed * 0.7 + 1) * 1.4;
      animCubeRef.current.position.z = Math.sin(elapsed * 0.55 + 2) * 1.4;
      animCubeRef.current.rotation.x -= delta * 0.8;
      animCubeRef.current.rotation.z += delta * 1.2;
    }

    // 3. Core Programming Satellite (Orbiting Icosahedron)
    if (codeGemRef.current) {
      codeGemRef.current.position.x = Math.sin(elapsed * 0.45 + 4) * 2.3;
      codeGemRef.current.position.y = Math.cos(elapsed * 0.6 + 3) * 1.6;
      codeGemRef.current.position.z = Math.cos(elapsed * 0.45 + 4) * 1.8;
      codeGemRef.current.rotation.y += delta * 1.3;
      codeGemRef.current.rotation.z -= delta * 0.7;
    }

    // Ambient floating particle cluster rotation
    if (particlesGroupRef.current) {
      particlesGroupRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <>
      {/* Game Dev Satellite */}
      <mesh ref={gameOrbRef} scale={0.24}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#005A9C"
          metalness={0.9}
          roughness={0.15}
          emissive="#005A9C"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* 3D Animation Satellite */}
      <mesh ref={animCubeRef} scale={0.22}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#60C1E5"
          metalness={0.85}
          roughness={0.2}
          emissive="#60C1E5"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Programming / Cybersecurity Satellite */}
      <mesh ref={codeGemRef} scale={0.2}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#1B365D"
          metalness={0.95}
          roughness={0.1}
          emissive="#60C1E5"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Ambient floating constellation */}
      <group ref={particlesGroupRef}>
        {[
          [-2.4, 1.8, -0.9],
          [2.5, -1.3, -0.6],
          [-1.9, -2.1, 0.5],
          [2.2, 2.0, 0.7],
          [-0.9, 2.6, -1.3],
          [1.6, -2.3, -1.0],
          [-2.8, 0.2, 1.1],
          [2.7, 0.5, -1.2],
        ].map((pos, idx) => (
          <Float key={idx} speed={1.8 + idx * 0.25} floatIntensity={0.7}>
            <mesh position={pos as [number, number, number]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial
                color={idx % 2 === 0 ? "#60C1E5" : "#005A9C"}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Soft Ground Shadow */}
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.25}
        scale={6}
        blur={2.4}
        far={4.5}
      />
    </>
  );
}
