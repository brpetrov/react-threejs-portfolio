import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import Topbar from './VsCodeSections/Topbar';
import Sidebar from './VsCodeSections/Sidebar';
import MainView from './VsCodeSections/MainView';
import { fileContents } from '../constants';

const LaptopContent = () => {
  const [activeFile, setActiveFile] = useState('index.html');
  const [showDialog, setShowDialog] = useState(false);
  return (
    <Html
      className='content'
      rotation-x={-Math.PI / 2}
      position={[0, 0.05, -0.09]}
      transform
      occlude
      zIndexRange={[0, 10]}
      onPointerDown={e => e.stopPropagation()}>
      <Topbar onShowDialog={() => setShowDialog(true)} />
      <div className='flex h-screen w-100'>
        <Sidebar onSelectFile={setActiveFile} />
        <MainView content={fileContents[activeFile]} />
      </div>
      {showDialog && (
        <div
          className='absolute bg-black-600 text-white rounded-lg p-4 z-50'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '10px',
            padding: '20px',
          }}>
          <p>Keep coding!</p>
          <div className='text-center'>
            <button
              className='p-1 mt-3 rounded bg-none hover:bg-gray-700'
              onClick={() => setShowDialog(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </Html>
  );
};

export default LaptopContent;
