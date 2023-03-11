import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Film, MovieResult } from 'src/app/model/film.class';
import { FilmHttpService } from 'src/app/providers/film-http.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {
  // @Input() listMovie: Array<MovieResult> | undefined;
  // @Output() search: EventEmitter<string> = new EventEmitter<string>();

  listMovie: Array<MovieResult> | undefined;
  film: Film | undefined;

  constructor(private httpService: FilmHttpService) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['listMovie'].currentValue){
  //     this.listMovie = this.httpService.listMovie(changes['listMovie'].currentValue);
  //   }
  // }

  onSearch(query: string) {
    this.httpService.searchMovies(query);
    this.listMovie = this.httpService.listMovie;
    this.film = this.httpService.film;
  }
}
