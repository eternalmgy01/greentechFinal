import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Animes} from './animes.module';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  animeApi: 'http://localhost:3000/Animes';
  constructor(private _http: HttpClient) { }
  getAnimes(id): Observable<Animes> {
    return this._http.get<Animes>(this.animeApi + id);
  }
}
