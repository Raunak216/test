'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

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

    const handleTouchStart = (event) => {
      if (event.touches.length === 2) {
        controls.enabled = true;
      } else if (event.touches.length === 1) {
        controls.enabled = false;
      }
    };

    const handleTouchMove = (event) => {
      if (event.touches.length === 2) {
        controls.enabled = true;
      } else {
        controls.enabled = false;
      }
    };

    const handleTouchEnd = (event) => {
      if (event.touches.length === 0) {
        controls.enabled = true; // Re-enable controls after touch ends
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    controls.addEventListener('end', handleEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
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

const Stuff = () => {
  const [startY, setStartY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  if (typeof window === 'undefined') return null;

  const model = useLoader(GLTFLoader, '/models/Computer.glb');

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setStartY(e.touches[0].clientY);
      setIsSwiping(true);
    }
  };

  const handleTouchMove = (e) => {
    if (isSwiping) {
      const deltaY = startY - e.touches[0].clientY;
      window.scrollBy(0, deltaY);
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return (
    <Canvas
      style={{ touchAction: 'none' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CameraControls />
      <directionalLight castShadow position={[2, 3, 4]} intensity={3} />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1.5} floatingRange={[-0.2, 0.25]}>
        <primitive
          object={model.scene}
          scale={0.87}
          position-y={-1.6}
          rotation-y={Math.PI * 1.47}
          rotation-z={Math.PI * 2}
          rotation-x={Math.PI * 2}
        />
      </Float>
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(Stuff), { ssr: false });
