"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  const meshRef = useRef<any>();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#C17F59"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
