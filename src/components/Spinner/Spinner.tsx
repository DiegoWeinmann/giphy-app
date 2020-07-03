import React from 'react';

import './Spinner.css';

export const Spinner: React.FC = () => {
  return (
    <div className='spinner'>
      <div className='double-bounce1'></div>
      <div className='double-bounce2'></div>
    </div>
  );
};
