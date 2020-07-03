export type GiphyItem = {
  id: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
  title: string;
};

export interface ApiResponse {
  data: GiphyItem[];
}
