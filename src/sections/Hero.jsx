import {
  PerspectiveCamera,
  OrbitControls,
  ContactShadows,
  Environment,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.jsx';
import Laptop from '../components/Laptop';
import { useControls } from 'leva';

const Hero = () => {
  // const controls = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 1,
  //   },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const scale = (() => {
    if (isSmall) {
      return 0.6;
    } else if (isMobile) {
      return 0.7;
    } else if (isTablet) {
      return 0.8;
    } else {
      return 0.9;
    }
  })();

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:md-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi I'm Boyan <span className='waving-hand'>🤚</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Full Stack Software Dev</p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        {/* <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader></CanvasLoader>}>
            <HackerRoom
              //   scale={0.07}
              //   position={[0, 0, 0]}
              //   rotation={[0, 280, 0]}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
            <group>
              <Target position={sizes.targetPosition} />
            </group>
          </Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas> */}

        <Canvas
          className='w-full h-full'
          camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<CanvasLoader />}>
            <group
              rotation={[0, 0, 0]}
              position={isMobile || isSmall ? [0, 0.9, 0] : [0, -1, 0]}>
              <Laptop scale={scale} />
            </group>
            <Environment preset='night' />
          </Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          {!isMobile ? (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.2}
              maxPolarAngle={Math.PI / 2.2}
            />
          ) : null}
        </Canvas>

        {/* <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <Laptop />
            </group>
            <Environment preset='city' />
          </Suspense>
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas> */}
      </div>
    </section>

    // <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
    //   <pointLight position={[10, 10, 10]} intensity={1.5} />
    //   <Suspense fallback={null}>
    //     <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
    //       <Laptop />
    //     </group>
    //     <Environment preset='city' />
    //   </Suspense>
    //   <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
    //   <OrbitControls
    //     enablePan={false}
    //     enableZoom={false}
    //     minPolarAngle={Math.PI / 2.2}
    //     maxPolarAngle={Math.PI / 2.2}
    //   />
    // </Canvas>
  );
};

export default Hero;
