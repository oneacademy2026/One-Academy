"use client";

import { useEffect, useState, useCallback } from "react";
import * as THREE from "three";
import "@/components/canvas/TimerCompat";

/**
 * Custom React hook for THREE.Timer (the modern replacement for THREE.Clock in Three.js r183+).
 * 
 * Complies with React 19 hook guidelines:
 * - Uses lazy state initializer for single instantiation
 * - Connects to Page Visibility API in useEffect
 * - Disposes cleanly on unmount
 */
export function useThreeTimer(autoConnect = true) {
  const [timer] = useState(() => new THREE.Timer());

  useEffect(() => {
    if (autoConnect && typeof document !== "undefined") {
      timer.connect(document);
    }

    return () => {
      timer.dispose();
    };
  }, [timer, autoConnect]);

  const update = useCallback(
    (timestamp?: number): { delta: number; elapsed: number } => {
      timer.update(timestamp);
      return {
        delta: timer.getDelta(),
        elapsed: timer.getElapsed(),
      };
    },
    [timer]
  );

  const getDelta = useCallback((): number => {
    return timer.getDelta();
  }, [timer]);

  const getElapsed = useCallback((): number => {
    return timer.getElapsed();
  }, [timer]);

  return {
    timer,
    update,
    getDelta,
    getElapsed,
  };
}
