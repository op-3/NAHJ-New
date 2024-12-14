"use client";

import { Canvas } from "@react-three/fiber";
import { FloatingObjects } from "./FloatingObjects";
import { BackgroundParticles } from "./BackgroundParticles";

export const Scene3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <BackgroundParticles />
      <FloatingObjects />
    </Canvas>
  );
};
