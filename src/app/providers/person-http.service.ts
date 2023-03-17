import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { PersonResult } from "../model/person.type";

@Injectable({ providedIn: 'root' })
export class PersonHttpService {

  apiKey: string = '1ceb70aff83ef39efc0008b5ef133cdd';

  constructor(private readonly http: HttpClient) { }

  getPerson(namePerson: string): Observable<PersonResult> {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${namePerson}`;
    return this.http.get<PersonResult>(url, { responseType: 'json' })
  }
}
