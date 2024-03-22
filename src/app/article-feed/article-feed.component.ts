import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ArticleFeedService } from './article-feed.service';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './mat-paginator-intl.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  templateUrl: './article-feed.component.html',
  styleUrl: './article-feed.component.scss'
})
export class ArticleFeedComponent {

  articles: any = [];
  pagedArticles: any = [];

  pageSize = 10;
  currentPage = 0;

  maxTitleChars = 120;

  pageSizeOptions: number[] = [5, 10, 25, 50]; // Options de taille de page

  constructor(private articleFeedService: ArticleFeedService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleFeedService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
        this.updatePage();
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePage();
  }

  updatePage(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.pagedArticles = this.articles.slice(startIndex, startIndex + this.pageSize);
  }

  openArticleLink(articleLink: string): void {
    if (window) {
      window.open(articleLink);
    }
  }
}
