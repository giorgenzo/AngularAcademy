import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from './model/film.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MOVIE-DB';

  listMovie: Array<MovieResult> | undefined;

  constructor(private readonly router: Router) { }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
