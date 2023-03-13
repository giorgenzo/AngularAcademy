import { Component, EventEmitter } from '@angular/core';
import { FilmHttpService } from './providers/film-http.service';
import { Film, MovieResult } from './model/film.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MOVIE-DB';
}
