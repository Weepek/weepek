

import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function CarModel2({ lowPoly, ...props }) {
  const { scene: highPolyScene } = useGLTF('/models/robot6/scene.gltf');
  const { scene: lowPolyScene } = useGLTF('/models/robot6/scene.gltf', !lowPoly);
  const scene = lowPoly ? lowPolyScene : highPolyScene;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.envMapIntensity = 0.8;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, lowPoly]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/models/robot6/scene-optimized.gltf');
useGLTF.preload('/models/robot6/scene-low-poly.gltf');