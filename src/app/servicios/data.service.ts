import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpClient: HttpClient ) { }
  getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }


}
