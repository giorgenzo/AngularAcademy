export type PersonResult = {
  profile_path: string | null;
  adult: boolean;
  id: number;
  known_for: Array<KnowF>;
  name: string;
  popularity: number;
}

export type KnowF = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_avarage: number;
}
