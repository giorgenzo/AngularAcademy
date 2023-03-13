import { Component, Output } from '@angular/core';
import { Film, MovieResult } from 'src/app/model/film.class';
import { FilmHttpService } from 'src/app/providers/film-http.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {
  @Output() listMovie: Array<MovieResult> | undefined;

  film: Film | undefined;

  constructor(private httpService: FilmHttpService) { }

  onSearch(query: string) {
    this.httpService.searchMovies(query);
    this.listMovie = this.httpService.listMovie;
    this.film = this.httpService.film;
  }

  onDetail() {
    console.log("Button detail funziona");
  }
}
