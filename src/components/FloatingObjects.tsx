import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const FloatingObjects: React.FC = () => {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
      group.current.position.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[2, 0, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#C17F59" opacity={0.6} transparent />
      </mesh>
      <mesh position={[-2, 1, -1]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#C17F59" opacity={0.4} transparent />
      </mesh>
      <mesh position={[0, -1, -3]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color="#C17F59" opacity={0.5} transparent />
      </mesh>
    </group>
  );
};
