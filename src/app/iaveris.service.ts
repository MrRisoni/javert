import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IaverisService {

  constructor(private http: HttpClient) { }



  getHosts(): Observable<any> {
    return    this.http.get<any>('http://localhost:3500/api/hosts')
 }
}
