import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points } from "@react-three/drei";

export const BackgroundParticles: React.FC = () => {
  const particles = useRef<THREE.Points>(null);
  const count = 2000;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    colors[i * 3] = 0.8;
    colors[i * 3 + 1] = 0.5;
    colors[i * 3 + 2] = 0.3;
  }

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.3} />
    </points>
  );
};
