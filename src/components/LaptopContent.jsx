import { Html } from '@react-three/drei';
import React from 'react';
import Topbar from './VsCodeSections/Topbar';
import Sidebar from './VsCodeSections/Sidebar';

const LaptopContent = () => {
  return (
    <Html
      className='content'
      rotation-x={-Math.PI / 2}
      position={[0, 0.05, -0.09]}
      transform
      occlude
      onPointerDown={e => e.stopPropagation()}>
      <Topbar />
      <Sidebar />
      <div className='h-100'></div>
    </Html>
  );
};

export default LaptopContent;
