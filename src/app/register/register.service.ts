import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(newUser: any): Observable<any>{
    return this.http.post<any>(`${APIEndpoint}auth/register`, newUser);
  }

  confirmRegistration(activationToken: string) {
    return this.http.get<any>(`${APIEndpoint}auth/confirm-registration`, { params: { token: activationToken } });
  }
  getAllUsers(): Observable<any>{
    return this.http.get(`${APIEndpoint}auth/user`);
  }
}
