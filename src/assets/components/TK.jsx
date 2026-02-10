import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function TK() {
  const torusKnotRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (torusKnotRef.current) {
      // Original rotation
      torusKnotRef.current.rotation.z += 0.001;
      torusKnotRef.current.rotation.x += 0.00001;
      torusKnotRef.current.rotation.y += 0.00001;
    }

    // Pulsing/radiating glow effect
    if (materialRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.15 + 0.2;
      materialRef.current.emissiveIntensity = pulse;
    }
  });

  return (
    <mesh ref={torusKnotRef} castShadow>
      <torusKnotGeometry args={[10, 2.5, 150, 25, 2, 5]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#66FCF1"
        wireframe
        emissive="#66FCF1"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
