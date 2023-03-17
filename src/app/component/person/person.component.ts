import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KnowF, PersonResult } from 'src/app/model/person.type';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person!: Array<KnowF>;

  constructor(private readonly router: Router) { }

  // onDetail(id: number): void {
  //   this.router.navigateByUrl(`person/${id}`);
  // }
}
