import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getQuoteDetailsAPI(){
    return this.http.get('https://dummyjson.com/quotes/random')
  }
}
