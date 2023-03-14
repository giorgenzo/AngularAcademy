import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film, MovieResult } from 'src/app/model/film.class';
import { FilmHttpService } from 'src/app/providers/film-http.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {
  @Output() listMovie: EventEmitter<Array<MovieResult>> = new EventEmitter<Array<MovieResult>>;

  constructor(private httpService: FilmHttpService) { }

  onSearch(query: string) {
    this.httpService.searchMovies(query).subscribe((data) => {
      this.listMovie.emit(data.results);
    });
  }
}
