import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieFormComponent } from './component/search-form/movie-form.component';
import { FilmCardComponent } from './component/detail-card-film/detail-card.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RegistrazioneComponent } from './component/registrazione/registrazione.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SerieTvComponent } from './component/serie-tv/serie-tv.component';
import { PersonComponent } from './component/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    FilmCardComponent,
    MovieCardComponent,
    HomepageComponent,
    RegistrazioneComponent,
    LoginComponent,
    SerieTvComponent,
    PersonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
