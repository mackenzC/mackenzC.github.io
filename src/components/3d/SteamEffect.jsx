import { Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function SteamEffect() {
  const defaultStart = 1;
  const maxHeight = 3;
  const defaultOpacity = 0.9;

  const [cloudOpacity, setCloudOpacity] = useState(defaultOpacity);
  const cloudRef = useRef();

  useFrame((state, delta) => {
    if (cloudRef.current) {
      cloudRef.current.position.y += 0.25 * delta;
    }

    if (cloudOpacity === 0) {
      setCloudOpacity(defaultOpacity);
      cloudRef.current.position.y = defaultStart;
    }
    setCloudOpacity((prev) => Math.max(0, prev - delta * 0.12));
  });

  return (
    <group ref={cloudRef}>
      <Cloud
        seed={1}
        bounds={[1.5, 0.5, 1.5]} // [width, height, depth]
        volume={2}
        color="#ffffff"
        fade={25}
        opacity={cloudOpacity}
        speed={1}
        growth={0.2}
        segments={16}
        position={[0, 0, 0]}
      />
    </group>
  );
}
