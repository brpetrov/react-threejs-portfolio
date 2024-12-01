import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const CSharpLogo = props => {
  const targetRef = useRef();
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  const { nodes, materials } = useGLTF('/models/c_sharp_logo.glb');
  return (
    <group {...props} dispose={null} ref={targetRef}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C#_C#_0'].geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/c_sharp_logo.glb');
export default CSharpLogo;
