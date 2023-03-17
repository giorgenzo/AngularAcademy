import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/model/film.type';
import { KnowF, PersonResult } from 'src/app/model/person.type';
import { TvResult } from 'src/app/model/tv.type';
import { FilmHttpService } from 'src/app/providers/film-http.service';
import { PersonHttpService } from 'src/app/providers/person-http.service';
import { TvHttpService } from 'src/app/providers/tv-http.services';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {
  @Output() listMovie: EventEmitter<Array<MovieResult>> = new EventEmitter<Array<MovieResult>>;
  @Output() listTv: EventEmitter<Array<TvResult>> = new EventEmitter<Array<TvResult>>;
  @Output() listPerson: EventEmitter<Array<KnowF>> = new EventEmitter<Array<KnowF>>;
  movie!: Array<MovieResult>;
  tv!: Array<TvResult>;
  person!: Array<KnowF>;

  title = 'MOVIE-DB';
  mode: string = 'person';

  constructor(private readonly httpService: FilmHttpService, private readonly httpTvService: TvHttpService, private readonly httpPersonService: PersonHttpService) { }

  onSearch(query: string, scelta: string) {
    if (scelta === 'film') {
      this.httpService.searchMovies(query).subscribe((data) => {
        this.listMovie.emit(data.results);
        this.movie = data.results;
      });
    } else if (scelta === 'tv') {
      this.httpTvService.getTv(query).subscribe((data) => {
        this.listTv.emit(data.results);
        this.tv = data.results;
      });
    } else if (scelta === 'person') {
      this.httpPersonService.getPerson(query).subscribe((data) => {
        this.listPerson.emit(data.known_for);
        this.person = data.known_for;
      });
    }
  }
}
