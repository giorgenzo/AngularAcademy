import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Film, MovieResult } from "../model/film.class";

@Injectable({providedIn: "root"})
export class FilmHttpService {

  constructor(private readonly http: HttpClient) { }

  listMovie: Array<MovieResult> | undefined;
  film: Film | undefined;

  searchMovies(query: string) {
    const apiKey = '1ceb70aff83ef39efc0008b5ef133cdd';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    this.http.get(url, {responseType: "json"}).subscribe((data) => {
      this.film = JSON.parse(JSON.stringify(data))
      this.listMovie = this.film!!.results;
    });
  }
}
