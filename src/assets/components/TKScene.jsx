import { Canvas } from '@react-three/fiber';
import TK from './TK';
import { useEffect, useState } from 'react';

export default function TKScene() {
  const [scale, setScale] = useState(1);
  const [cameraZ, setCameraZ] = useState(40);

  // Responsive scaling based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile - smaller scale and further camera
        setScale(0.4);
        setCameraZ(55);
      } else if (width < 1024) {
        // Tablet - medium scale
        setScale(0.6);
        setCameraZ(50);
      } else {
        // Desktop - full scale
        setScale(0.8);
        setCameraZ(40);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full h-[150vh] md:h-[120vh] flex items-center justify-center overflow-hidden'>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
        camera={{
          position: [0, 0, cameraZ],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />

        <directionalLight
          color="white"
          position={[10, 10, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />

        <directionalLight
          color="#ccddff"
          position={[-5, 5, -5]}
          intensity={0.3}
        />

        {/* Main torus knot with responsive scale */}
        <group scale={scale}>
          <TK />
        </group>

        {/* Shadow receiver plane */}
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -30, 0]}
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial transparent opacity={0} colorWrite={false} />
        </mesh>
      </Canvas>
    </div>
  );
}
