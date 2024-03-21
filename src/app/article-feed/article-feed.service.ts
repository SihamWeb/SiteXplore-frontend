import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class ArticleFeedService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${APIEndpoint}rss`);
  }
}
