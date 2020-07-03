import React, { useState, useEffect } from 'react';

import { RouteComponentProps } from 'wouter';
import { GiphyItem } from 'types';
import { getGifs } from 'services/getGifs';
import { Gif, Spinner } from 'components';

interface IGifsList {
  gifs: GiphyItem[];
}

export const GifsList: React.FC<IGifsList> = ({ gifs }) => {
  return (
    <>
      {gifs.map((gif) => (
        <Gif
          key={gif.id}
          id={gif.id}
          url={gif.images.downsized_medium.url}
          title={gif.title}
        />
      ))}
    </>
  );
};
