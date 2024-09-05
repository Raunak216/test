'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';

function CameraControls() {
  const { camera } = useThree();
  const controlsRef = useRef();

 
  const initialPosition = [2, 2, 5];
  const initialTarget = [0, -1, 0];

  useEffect(() => {
    camera.position.set(...initialPosition);
    camera.lookAt(...initialTarget);
  }, [camera]);

  useEffect(() => {
    const controls = controlsRef.current;

    const handleEnd = () => {
     
      gsap.to(camera.position, {
        x: initialPosition[0],
        y: initialPosition[1],
        z: initialPosition[2],
        duration: 1.2,
        ease: 'power3.out',
        onUpdate: () => {
          camera.lookAt(...initialTarget);
          controls.update(); 
        },
        onComplete: () => {
         
          controls.enabled = true;
        },
      });

      gsap.to(controls.target, {
        x: initialTarget[0],
        y: initialTarget[1],
        z: initialTarget[2],
        duration: 1.2,
        ease: 'power3.out',
        onUpdate: () => controls.update(),
      });

      
      controls.enabled = false;
    };

    controls.addEventListener('end', handleEnd);

   
    return () => {
      controls.removeEventListener('end', handleEnd);
    };
  }, [camera, initialPosition, initialTarget]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2 + Math.PI / 10} 
      maxAzimuthAngle={Math.PI / 3 + Math.PI / 10} 
      minAzimuthAngle={-Math.PI / 3 - Math.PI / 10} 
    />
  );
}

export default function Stuff() {
  const model = useLoader(GLTFLoader, './Computer.glb');

  return (
    <>
      <Canvas>
        <CameraControls />
        <directionalLight castShadow position={[2, 3, 4]} intensity={3} />
        <ambientLight intensity={0.5} />
        <Environment preset='city' />

        <Float
          speed={1.2}
          rotationIntensity={0.7}
          floatIntensity={2}
          floatingRange={[-0.4, 0]}
        >
          <primitive
            object={model.scene}
            scale={0.87}
            position-y={-1}
            rotation-y={Math.PI * 1.47}
            rotation-z={Math.PI * 2}
            rotation-x={Math.PI * 2}
          />
        </Float>
      </Canvas>
    </>
  );
}
