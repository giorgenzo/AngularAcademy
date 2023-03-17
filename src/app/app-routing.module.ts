import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmCardComponent } from './component/detail-card-film/detail-card.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MovieFormComponent } from './component/search-form/movie-form.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/search' },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'search', component: MovieFormComponent },
  { path: 'movie/:id', component: FilmCardComponent },
  // { path: 'tv/:id', component: DetailCardTvComponent },
  // { path: 'person/:id', component:  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
