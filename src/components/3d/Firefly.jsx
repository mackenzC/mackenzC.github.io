import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Firefly() {
  const fireflyRef = useRef();

  const randomOffsets = useMemo(
    () => ({
      speedX: Math.random() * 0.2 + 0.2,
      speedY: Math.random() * 0.2 + 0.2,
      speedZ: Math.random() * 0.2 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }),
    [],
  );

  useFrame((state) => {
    if (!fireflyRef.current) return;

    const elapsedTime = state.clock.getElapsedTime();

    const x = Math.sin(elapsedTime * randomOffsets.speedX) * 3.5;
    const y = Math.cos(elapsedTime * randomOffsets.speedY) * 1.5 + 3.3;
    const z =
      Math.sin(elapsedTime * randomOffsets.speedZ + randomOffsets.phase) * 3.5;

    fireflyRef.current.position.set(x, y, z);

    const pulse = (Math.sin(elapsedTime * 3 + randomOffsets.phase) + 1) / 2;
    fireflyRef.current.material.opacity = THREE.MathUtils.lerp(0, 1.0, pulse);
  });

  return (
    <mesh ref={fireflyRef}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial
        color="#ccff33"
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}
