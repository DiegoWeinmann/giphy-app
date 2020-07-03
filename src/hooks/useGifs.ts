import { useEffect, useState } from 'react';
import { getGifs } from 'services/getGifs';
import { GiphyItem } from 'types';

interface UseGifsProps {
  keyword: string;
}

export const useGifs = ({ keyword }: UseGifsProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState<GiphyItem[]>([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((response) => {
      setGifs(response.data);
      setLoading(false);
    });
  }, [keyword]);

  return {
    gifs,
    loading,
  };
};
