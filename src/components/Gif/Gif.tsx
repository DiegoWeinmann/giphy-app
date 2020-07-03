import React from 'react';

import './Gif.css';

interface IGif {
  title: string;
  id: string;
  url: string;
}

export const Gif: React.FC<IGif> = ({ title, id, url }) => (
  <div className='Gif'>
    <h4>{title}</h4>
    <img src={url} alt={title} />
  </div>
);
