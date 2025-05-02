import { Canvas } from '@react-three/fiber'
import TK from './TK';

export default function TKScene() {
  return (
    <div className='flex items-center justify-center'>
      <Canvas 
        style={{ width: "100vw", height: "100vh"}} 
        camera={{position: [0, 0, 30]}} 
        shadows 
        gl={{ antialias: true }}
      >
       
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
        
        <TK />
        
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
  )
}
