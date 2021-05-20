import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Animes} from './animes';
import {ANIMES} from './animes-data';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor() { }

  getAnimes(id: number): Observable<Animes>{
    return of(ANIMES.find(animes => animes.id === id));
  }
}
