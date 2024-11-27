import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='bg-black-600 h-full w-20 border-r border-r-gray-500 flex flex-col py-2 space-y-2'>
        {/* File: index.html */}
        <div className='flex items-center gap-2 text-gray-300 hover:bg-gray-700   py-1 rounded cursor-pointer'>
          <img
            src='/public/assets/laptop-icons/html.svg' /* Replace with actual HTML icon */
            alt='index.html'
            className='w-[1.25rem] -ml-[0.1rem]'
          />
          <span className='text-xs -ml-2'>index.html</span>
        </div>
        {/* File: styles.css */}
        <div className='flex items-center gap-2 text-gray-300 hover:bg-gray-700 py-1 rounded cursor-pointer'>
          <img
            src='/public/assets/laptop-icons/css.svg' /* Replace with actual CSS icon */
            alt='styles.css'
            className='w-[1rem]'
          />
          <span className='-ml-1 text-xs'>style.css</span>
        </div>
        {/* File: main.js */}
        <div className='flex items-center gap-2 text-gray-300 hover:bg-gray-700 py-1 rounded cursor-pointer'>
          <img
            src='/public/assets/laptop-icons/js.svg' /* Replace with actual JavaScript icon */
            alt='main.js'
            className='w-[0.95rem]'
          />
          <span className='text-xs -ml-1'>main.js</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
