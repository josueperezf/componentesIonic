import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient: HttpClient ) { }
  getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }
  getMenuOpts() {
    const url = 'assets/data/menu.json';
    return this.httpClient.get<Componente[]>(url);
  }
  getHeroes() {
    const url = 'assets/data/superheroes.json';
    return this.httpClient.get<Componente[]>(url)
              .pipe(
                delay(1500)
              );
  }
  getAlbums() {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this.httpClient.get<any[]>(url);
  }
}
