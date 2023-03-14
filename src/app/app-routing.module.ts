import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmCardComponent } from './component/detail-card/detail-card.component';

const routes: Routes = [
  { path: 'movie/:id', component: FilmCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
