 

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function CarModel(props) {
  const { scene } = useGLTF('/models/porsche/scene.gltf'); 
  return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/porsche/scene.gltf');  