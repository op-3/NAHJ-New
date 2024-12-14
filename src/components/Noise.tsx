"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ShaderMaterial, Mesh } from "three";

interface NoiseUniforms {
  u_time: { value: number };
  u_colorA: { value: THREE.Color };
  u_colorB: { value: THREE.Color };
}

export function Noise(): JSX.Element {
  const mesh = useRef<Mesh>(null);

  const uniforms = useMemo<NoiseUniforms>(
    () => ({
      u_time: { value: 0 },
      u_colorA: { value: new THREE.Color("#c0a080") },
      u_colorB: { value: new THREE.Color("#purple") },
    }),
    []
  );

  const fragmentShader = `
    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    
    void main() {
      vec2 uv = vUv;
      float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123);
      vec3 color = mix(u_colorA, u_colorB, noise + sin(u_time * 0.5) * 0.5);
      gl_FragColor = vec4(color, 0.1);
    }
  `;

  const vertexShader = `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  useFrame((state) => {
    if (mesh.current?.material) {
      (mesh.current.material as ShaderMaterial).uniforms.u_time.value =
        state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
}

export default Noise;
