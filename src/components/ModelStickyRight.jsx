"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

// 3D Model rendering with slight rotation
function Model() {
  const modelRef = useRef();
  const gltf = useGLTF("/vintage_toy_airplane.glb");

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1.3}
      position={[0, -1, 0]}
      rotation={[0.1, -Math.PI / 4, 0]}
    />
  );
}

export default function ModelStickyRight() {
  const controlsRef = useRef();
  const timeoutRef = useRef();

  const defaultPosition = new THREE.Vector3(0, 1.5, 12);
  const defaultTarget = new THREE.Vector3(0, 0, 0);

  // Reset camera after user stops interacting
  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.object.position.copy(defaultPosition);
      controlsRef.current.target.copy(defaultTarget);
      controlsRef.current.update();
    }
  };

  const handleUserInteraction = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      resetCamera();
    }, 5000);
  };

  useEffect(() => {
    const dom = controlsRef.current?.domElement;
    if (dom) {
      dom.addEventListener("pointerdown", handleUserInteraction);
      dom.addEventListener("wheel", handleUserInteraction);
      return () => {
        dom.removeEventListener("pointerdown", handleUserInteraction);
        dom.removeEventListener("wheel", handleUserInteraction);
      };
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 12], fov: 110 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 4]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          minDistance={8}
          maxDistance={16}
        />
      </Canvas>
    </div>
  );
}
