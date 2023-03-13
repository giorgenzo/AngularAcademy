import { HttpClient } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Film, MovieResult } from "../model/film.class";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class FilmHttpService {
  @Output() listMovie: Array<MovieResult> | undefined;

  film: Film | undefined;

  constructor(private readonly http: HttpClient) { }

  searchMovies(query: string) {
    const apiKey = '1ceb70aff83ef39efc0008b5ef133cdd';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    this.http.get(url, {responseType: "json"}).subscribe((data) => {
      this.film = JSON.parse(JSON.stringify(data))
      this.listMovie = this.film!!.results;
      console.log(this.listMovie);
    });
  }
}
