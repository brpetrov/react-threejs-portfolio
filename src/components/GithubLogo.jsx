import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const GithubLogo = ({ ...props }) => {
  const githubRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 5,
      })
      .to(githubRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 3,
        stagger: {
          each: 0.5,
        },
      });
  });

  const { nodes, materials } = useGLTF('/models/github_logo.glb');
  return (
    <Float floatIntensity={2}>
      <group {...props} dispose={null} {...props}>
        <group
          position={[1.4, 2.7, 6.4]}
          scale={19}
          ref={githubRef}
          rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.glossy_putih}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.github}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload('/models/github_logo.glb');
export default GithubLogo;
