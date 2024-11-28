import React from 'react';

const MainView = ({ content }) => {
  return (
    <div
      className='h-100 font-mono text-white-700 text-left'
      style={{ fontSize: '11px', whiteSpace: 'pre' }}>
      <pre>{content}</pre>
    </div>
  );
};

export default MainView;
