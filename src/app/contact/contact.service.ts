import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  contact(contactInfo: any) {
    return this.http.post<any>(`${APIEndpoint}contact`, contactInfo);
  }
}
