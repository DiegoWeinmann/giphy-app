import React from 'react';

import './GifsList.css';
import { GiphyItem } from 'types';
import { Gif } from 'components';
import { withSpinner } from 'hocs/withSpinner';

interface IGifsList {
  gifs: GiphyItem[];
}

export const GifsList = withSpinner(
  ({ gifs }: React.PropsWithChildren<IGifsList>) => {
    return (
      <div className='GifsList'>
        {gifs.map((gif) => (
          <Gif
            key={gif.id}
            id={gif.id}
            url={gif.images.downsized_medium.url}
            title={gif.title}
          />
        ))}
      </div>
    );
  }
);
