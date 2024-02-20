import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../environments/environments.dev';

@Injectable({providedIn: 'root'})
export class HeroService {

  private baseURL  : string = environments.baseURL;
  private endPoint : string = environments.endPoint.heroes;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    let url : string = `${this.baseURL}/${this.endPoint}`;
    return this.http.get<Hero[]>(url)
                    .pipe();
  }
}
