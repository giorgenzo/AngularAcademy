// export class Film {
//     page: number;
//     result: Array<MovieResult>;
//     total_result: number;
//     total_pages: number;

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
