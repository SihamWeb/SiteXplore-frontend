import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ArticleFeedService } from './article-feed.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-article-feed',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './article-feed.component.html',
  styleUrl: './article-feed.component.scss'
})
export class ArticleFeedComponent {
  title = 'Flux d\'actualités';

  articles: any = {};

  constructor(
    private ArticleFeedService: ArticleFeedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getArticles();
    console.log(this.articles);
  }

  getArticles(): void {
    this.ArticleFeedService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  openArticleLink(articleLink: string) {
    if(window) {
      window.open(articleLink);
    }
  }
}
