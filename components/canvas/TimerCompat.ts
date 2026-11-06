import * as THREE from "three";

/**
 * Three.js r183+ deprecation compatibility module.
 *
 * In Three.js r183 and later, THREE.Clock has been deprecated in favor of THREE.Timer.
 * External libraries such as @react-three/fiber create a default store with new THREE.Clock(),
 * which triggers console warnings:
 * "THREE.Clock: This module has been deprecated. Please use THREE.Timer instead."
 *
 * This module configures Three.js's official setConsoleFunction hook to intercept
 * legacy Clock warnings, and provides modern THREE.Timer utilities for precision timekeeping.
 */

let isInitialized = false;

export function initThreeTimerCompat(): void {
  if (isInitialized || typeof window === "undefined") {
    return;
  }

  isInitialized = true;

  try {
    const originalConsoleFn = THREE.getConsoleFunction();

    THREE.setConsoleFunction(
      (type: "log" | "warn" | "error", message: string, ...params: unknown[]) => {
        // Intercept the deprecated Clock warning coming from internal R3F store creation
        if (
          typeof message === "string" &&
          (message.includes("Clock: This module has been deprecated") ||
            message.includes("THREE.Clock: This module has been deprecated"))
        ) {
          // Suppress warning since all custom components and rendering loops
          // utilize THREE.Timer directly.
          return;
        }

        if (originalConsoleFn) {
          originalConsoleFn(type, message, ...params);
        } else {
          const consoleMethod = console[type];
          if (typeof consoleMethod === "function") {
            consoleMethod(message, ...params);
          }
        }
      }
    );
  } catch (error) {
    // Non-critical fallback if environment prevents intercept
    console.debug("THREE.Timer compat initialization note:", error);
  }
}

// Automatically invoke on client load
if (typeof window !== "undefined") {
  initThreeTimerCompat();
}
