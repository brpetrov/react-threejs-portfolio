import React from 'react';

const Sidebar = ({ onSelectFile }) => {
  const files = ['index.html', 'style.css', 'main.js'];

  return (
    <div className='bg-black-600 h-full w-[82px] border-r border-r-gray-500 flex flex-col py-2 space-y-2'>
      {files.map(file => (
        <div
          key={file}
          className='flex items-center gap-2 text-gray-300 hover:bg-gray-700 py-1 rounded cursor-pointer'
          onClick={() => onSelectFile(file)}>
          <img
            src={`/public/assets/laptop-icons/${file.split('.')[1]}.svg`}
            alt={file}
            className={file === 'index.html' ? 'w-[1.2rem]' : 'w-[1.05rem]'}
          />
          <span className='text-xs -ml-1'>{file}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
