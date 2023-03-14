import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FilmId } from 'src/app/model/film.class';
import { FilmHttpService } from 'src/app/providers/film-http.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class FilmCardComponent {
  movieChoice: FilmId | undefined;

  constructor(private httpService: FilmHttpService, private readonly route: ActivatedRoute) {
    this.route.paramMap.subscribe({
      next: (params : ParamMap) => {
        const id = Number(params.get('id'));
        if(id > 0) {
          this.searchId(id.toString());
          console.log(id);
        }
      }
    })
  }

  searchId(queryId: string) {
    this.httpService.searchMoviesId(queryId).subscribe((data) => {
      this.movieChoice = JSON.parse(JSON.stringify(data))
    });;
  }
}
