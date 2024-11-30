import React from 'react';

const Topbar = ({ onShowDialog }) => {
  return (
    <div className='flex items-center justify-between w-100 h-7 bg-black-600 border-b border-b-gray-500'>
      <div className='w-10 h-100 p-1'>
        <img
          className='w-5 aspect-square'
          src='/public/assets/laptop-icons/vscode.svg'
          alt=''
        />
      </div>
      <div className='flex items-center gap-1 pr-1'>
        {/* Minimize */}
        <button className='text-gray-300 hover:bg-gray-600 w-5'>&ndash;</button>
        {/* Maximize */}
        <button className='text-gray-300 hover:bg-gray-600 w-5'>&#9744;</button>
        {/* Close */}
        <button
          onClick={onShowDialog}
          className='text-gray-300 hover:bg-red-400 w-5'>
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default Topbar;
