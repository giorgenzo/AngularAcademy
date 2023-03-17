export interface Tv {
  page: number;
  results: Array<TvResult>;
  total_pages: number;
  total_results: number;
}

export type TvResult = {
  poster_path: string | null;
  overview: string;
  genre_ids: Array<number>;
  id: number;
  original_name: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_average: number;
  first_air_date: string;
  origin_country: string;
  name: string;
}
