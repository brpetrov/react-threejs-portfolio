import { useGSAP } from '@gsap/react';
import { Center, Float, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const SketchfabLogo = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/models/sketchfab_logo.glb');
  return (
    <Float>
      <group {...props} dispose={null} scale={0.25} rotation={[0, -1.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          position={[0, 2.563, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[2.522, 0.223, 2.522]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Material}
          position={[0.171, 3.348, 0.021]}
          rotation={[-0.784, 0, 0]}
          scale={[0.189, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Material}
          position={[0.171, 2.02, -0.714]}
          rotation={[-2.878, 0, 0]}
          scale={[0.189, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Material}
          position={[0.171, 2.024, 0.756]}
          rotation={[1.301, 0, 0]}
          scale={[0.189, 1, 1]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/sketchfab_logo.glb');

export default SketchfabLogo;
