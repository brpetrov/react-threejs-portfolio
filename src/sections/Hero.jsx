import {
  PerspectiveCamera,
  OrbitControls,
  ContactShadows,
  Environment,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import CSharpLogo from '../components/CSharpLogo.jsx';
import Laptop from '../components/Laptop';
import { useControls } from 'leva';
import ReactLogo from '../components/ReactLogo.jsx';
import GithubLogo from '../components/GithubLogo.jsx';
import SketchfabLogo from '../components/SketchfabLogo.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const scale = (() => {
    if (isSmall) {
      return 0.9;
    } else if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 1.2;
    } else {
      return 1.3;
    }
  })();

  const laptopGroupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const handlePointerDown = event => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = event => {
    setIsDragging(false);
  };

  const handlePointerMove = event => {
    if (isMobile || isSmall) return;
    if (!isDragging || !laptopGroupRef.current) return;

    const deltaX = event.clientX - lastMousePosition.x;
    laptopGroupRef.current.rotation.y += deltaX * 0.01;

    laptopGroupRef.current.rotation.x = Math.max(
      -Math.PI / 4,
      Math.min(Math.PI / 4, laptopGroupRef.current.rotation.x)
    );

    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:md-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans font-mono'>
          Hi I'm Boyan <span className='waving-hand'>🤚</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Full Stack Software Dev</p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Canvas
          className='w-full h-full'
          camera={{ position: [-5, 0, -15], fov: 55 }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<CanvasLoader />}>
            <group
              ref={laptopGroupRef}
              rotation={[0, 0, 0]}
              position={isMobile || isSmall ? [0, -1.5, 0] : [0, -2.5, 0]}
              onPointerDown={handlePointerDown}>
              <Laptop scale={scale} />
            </group>
            <Environment preset='night' />
            {
              <group>
                <CSharpLogo position={sizes.cShapPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <GithubLogo position={sizes.githubPosition} />
                <SketchfabLogo position={sizes.sketchFabPosition} />
              </group>
            }
          </Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 27]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
        </Canvas>
      </div>
      <div className='absolute bottom-7 right-0 left-0 w-full z-10 c-space'>
        <a href='#contact' className='w-fit'>
          <Button
            name='Get in touch'
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
