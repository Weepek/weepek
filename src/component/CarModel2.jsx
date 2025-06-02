// import React, { useEffect } from 'react';
// import { useGLTF } from '@react-three/drei';

// export default function CarModel2(props) {
//   const { scene } = useGLTF('/models/zenvo/scene.gltf');
//   useEffect(() => {
//     console.log('Model loaded:', scene);
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         console.log('Mesh:', child);
//       }
//     });
//   }, [scene]);
//   return <primitive object={scene} {...props} />;
// }
// useGLTF.preload('/models/zenvo/scene.gltf');


import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function CarModel2({ lowPoly, ...props }) {
  const { scene: highPolyScene } = useGLTF('/models/zenvo/scene.gltf');
  const { scene: lowPolyScene } = useGLTF('/models/zenvo/scene.gltf', !lowPoly);
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

useGLTF.preload('/models/zenvo/scene-optimized.gltf');
useGLTF.preload('/models/zenvo/scene-low-poly.gltf');