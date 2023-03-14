import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Film, FilmId, MovieResult } from "../model/film.class";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class FilmHttpService {

  apiKey: string = '1ceb70aff83ef39efc0008b5ef133cdd';

  constructor(private readonly http: HttpClient) { }

  searchMovies(query: string): Observable<Film> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<Film>(url, {responseType: "json"});
  }

  searchMoviesId(movie_id: string): Observable<FilmId> {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get<FilmId>(url, {responseType: "json"});
  }
}
