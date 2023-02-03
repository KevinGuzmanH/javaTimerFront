import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimerSService {

  private URL = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  getTime(code: string[]): Observable<any>{
    return this.http.post(this.URL + '/timer',code)
  }

}
