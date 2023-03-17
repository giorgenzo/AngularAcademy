import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Tv } from "../model/tv.type"

@Injectable({ providedIn: 'root' })
export class TvHttpService {

  apiKey: string = '1ceb70aff83ef39efc0008b5ef133cdd';

  constructor(private readonly http: HttpClient) { }

  getTv(movieName: string): Observable<Tv> {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`;
    return this.http.get<Tv>(url, { responseType: 'json' })
  }
}
