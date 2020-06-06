import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IaverisService {

  constructor(private http: HttpClient) { }



  getHosts(): Observable<any> {
    return    this.http.get<any>('http://localhost:3500/api/hosts')
 }


 getHostInfo(): Observable<any> {
   return  this.http.get<any>(environment.api_url + '/api/hostinfo')
}



}
