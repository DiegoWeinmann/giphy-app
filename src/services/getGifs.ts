import { ApiResponse } from 'types';

const API_KEY = 'NGVFAFst6hJHAjnGKjxJuCqJRlEEktbK';

interface Options {
  keyword: string;
}

export const getGifs = (options: Options): Promise<ApiResponse> => {
  const { keyword } = options;
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5&offset=0&raiting=G&lang=en`
  ).then<ApiResponse>((res) => res.json());
};
