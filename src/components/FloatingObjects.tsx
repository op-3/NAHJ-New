import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export const FloatingObjects: React.FC = () => {
  const group = useRef<Group>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOSSafari, setIsIOSSafari] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    setIsMobile(window.innerWidth < 768);

    // Check if the device is iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsIOSSafari(isIOS && isSafari);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reduce animation complexity on mobile
  useFrame((state) => {
    if (!group.current || (isMobile && isIOSSafari)) return;

    // Use simpler animation on mobile
    if (isMobile) {
      group.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      return;
    }

    // Full animation on desktop
    group.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3;
    group.current.position.y =
      Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  // Reduce number of objects on mobile
  const renderMobileObjects = isMobile && !isIOSSafari;
  const renderDesktopObjects = !isMobile;

  return (
    <group ref={group}>
      {(renderDesktopObjects || renderMobileObjects) && (
        <mesh position={[2, 0, -2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#C17F59" opacity={0.6} transparent />
        </mesh>
      )}

      {renderDesktopObjects && (
        <>
          <mesh position={[-2, 1, -1]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#C17F59" opacity={0.4} transparent />
          </mesh>
          <mesh position={[0, -1, -3]}>
            <torusGeometry args={[0.3, 0.1, 16, 32]} />
            <meshStandardMaterial color="#C17F59" opacity={0.5} transparent />
          </mesh>
        </>
      )}
    </group>
  );
};
