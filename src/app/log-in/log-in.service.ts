import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post<any>(`${APIEndpoint}auth/login`, credentials);
  }
}
