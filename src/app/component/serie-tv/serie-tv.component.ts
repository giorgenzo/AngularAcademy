import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TvResult } from 'src/app/model/tv.type';

@Component({
  selector: 'app-serie-tv',
  templateUrl: './serie-tv.component.html',
  styleUrls: ['./serie-tv.component.scss']
})
export class SerieTvComponent {
  @Input() tv!: Array<TvResult>;

  constructor(private readonly router: Router) { }

  // onDetail(id: number): void {
  //   this.router.navigateByUrl(`tv/${id}`);
  // }

}
