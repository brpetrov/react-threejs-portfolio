import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import Topbar from './VsCodeSections/Topbar';
import Sidebar from './VsCodeSections/Sidebar';
import MainView from './VsCodeSections/MainView';
import { fileContents } from '../constants';

const LaptopContent = () => {
  const [activeFile, setActiveFile] = useState('index.html');

  return (
    <Html
      className='content'
      rotation-x={-Math.PI / 2}
      position={[0, 0.05, -0.09]}
      transform
      occlude
      zIndexRange={[0, 10]}
      onPointerDown={e => e.stopPropagation()}>
      <Topbar />
      <div className='flex h-screen w-100'>
        <Sidebar onSelectFile={setActiveFile} />
        <MainView content={fileContents[activeFile]} />
      </div>
    </Html>
  );
};

export default LaptopContent;
