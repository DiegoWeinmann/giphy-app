import React, { useState, useEffect } from 'react';

import { RouteComponentProps } from 'wouter';
import { Spinner, GifsList } from 'components';
import { GiphyItem } from 'types';
import { getGifs } from 'services/getGifs';

export const SearchResults: React.FunctionComponent<RouteComponentProps> = ({
  params,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<GiphyItem[]>([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: params.keyword }).then((response) => {
      setGifs(response.data);
      setLoading(false);
    });
  }, [params.keyword]);

  return <div>{loading ? <Spinner /> : <GifsList gifs={gifs} />}</div>;
};
