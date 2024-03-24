import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class ArticleFeedService {

  constructor(private http: HttpClient) { }

  filter(filterData: any){
    var endpointUrl = `${APIEndpoint}rss/filtres?`;
    if(filterData.author) {
      endpointUrl += `&author=${filterData.author}`;
    }
    if(filterData.category) {
      endpointUrl += `&category=${filterData.category}`;
    }
    if(filterData.startDate) {
      endpointUrl += `&startDate=${filterData.startDate}`;
    }
    if(filterData.endDate) {
      endpointUrl += `&endDate=${filterData.endDate}`;
    }

    return this.http.get<any>(endpointUrl);
  }

  getArticles() {
    return this.http.get(`${APIEndpoint}rss`);
  }

  getAuthors() {
    return this.http.get(`${APIEndpoint}rss/authors`);
  }

  getCategories() {
    return this.http.get(`${APIEndpoint}rss/categories`);
  }
}
