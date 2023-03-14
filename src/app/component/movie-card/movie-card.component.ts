import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/model/film.class';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: MovieResult;

  constructor(private router: Router) { }

  onDetail(id: number): void {
    this.router.navigateByUrl(`movie/${id}`);
  }
}
