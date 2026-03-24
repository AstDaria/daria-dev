import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

let engineReady = false;
let enginePromise: Promise<void> | null = null;

export function SparklesCore({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: SparklesCoreProps) {
  const [init, setInit] = useState(engineReady);
  const generatedId = useId();

  useEffect(() => {
    if (engineReady) {
      setInit(true);
      return;
    }
    if (!enginePromise) {
      enginePromise = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
    }
    enginePromise.then(() => {
      engineReady = true;
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id={id || generatedId}
      className={className}
      style={{ width: "100%", height: "100%" }}
      options={{
        background: { color: { value: background || "transparent" } },
        fullScreen: { enable: false, zIndex: 0 },
        fpsLimit: 60,
        particles: {
          color: { value: particleColor || "#ffffff" },
          move: {
            enable: true,
            direction: "none",
            outModes: { default: "out" },
            speed: { min: 0.2, max: speed || 1 },
            random: true,
            straight: false,
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: particleDensity || 80,
          },
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              mode: "auto" as any,
              startValue: "random" as any,
              destroy: "none" as any,
              count: 0,
              decay: 0,
              delay: 0,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: minSize || 1, max: maxSize || 2.5 },
          },
          effect: {
            close: true,
            fill: true,
            options: {},
            type: {} as SingleOrMultiple<string> | undefined,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
