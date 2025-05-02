import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function TK() {

    const torusKnotRef = useRef();

    useFrame((state, delta) =>{
        torusKnotRef.current.rotation.z += 0.001;
        torusKnotRef.current.rotation.x += 0.00001;
        torusKnotRef.current.rotation.y += 0.00001;
    });

  return (


        <mesh ref={torusKnotRef} castShadow>
            <torusKnotGeometry args={[10, 2.5, 150, 25, 2, 5]} />            
            <meshStandardMaterial color="#66FCF1" wireframe/>
        </mesh>

    
  )
}