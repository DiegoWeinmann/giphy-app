import React, { useState } from 'react';

import { RouteComponentProps, useLocation } from 'wouter';
import { useGifs } from 'hooks';
import { GifsList } from 'components';

export const Home: React.FunctionComponent<RouteComponentProps> = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };
  const { loading, gifs } = useGifs({});
  return (
    <div>
      <h1>Giphy App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='keyword'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='search a gif here...'
        />
      </form>
      <h4>Last search</h4>
      <GifsList gifs={gifs} />
    </div>
  );
};
