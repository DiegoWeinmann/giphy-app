import React from 'react';

import { RouteComponentProps } from 'wouter';
import { Spinner, GifsList } from 'components';
import { useGifs } from 'hooks';

export const SearchResults: React.FunctionComponent<RouteComponentProps> = ({
  params,
}) => {
  const { loading, gifs } = useGifs({ keyword: params.keyword });
  return <div>{loading ? <Spinner /> : <GifsList gifs={gifs} />}</div>;
};
