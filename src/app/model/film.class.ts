// export class Film {
//     page: number;
//     result: Array<MovieResult>;
//     total_result: number;
//     total_pages: number;

import { NumberValueAccessor } from "@angular/forms";

//     constructor(film?: Partial<Film>) {
//         this.page = film?.page ?? 0;
//         this.result = film?.result ?? new Array<MovieResult>();
//         this.total_result = film?.total_result ?? 0;
//         this.total_pages = film?.total_pages ?? 0;
//     }
// }

// export interface MovieResult {
//     poster_path: string | null;
//     adult: boolean;
//     overview: string;
//     release_date: string;
//     genre_ids: Array<number>;
//     id: number;
//     original_title: string;
//     original_language: string;
//     title: string;
//     backdrop_path: string | null;
//     popularity: number;
//     vote_count: number;
//     video: boolean;
//     vote_average: number;
// }

export interface Film {
    page: number;
    results: Array<MovieResult>;
    total_pages: number;
    total_results: number;
}

export interface MovieResult {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids?: Array<number> | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface FilmId {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: Array<GenereFilm>;
  homepage: string | null;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<CompanyProduction>;
  production_countries: Array<CountryProduction>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<LingueParlate>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenereFilm {
  id: number;
  name: string;
}

export interface CompanyProduction {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface CountryProduction {
  iso_3166_1: string;
  name: string;
}

export interface LingueParlate {
  iso_639_1: string;
  name: string;
}
