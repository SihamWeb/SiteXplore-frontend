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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTable, faTableList } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';

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
    FontAwesomeModule,
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
  authors: any = [];
  categories: any = []; 
  pagedArticles: any = [];
  filterData: any = {};
  responseMessage: string = '';
  disposition = 'cards';
  maxTitleChars = 30;
  maxDescChars = 450;

  faTable = faTable;
  faTableList = faTableList;

  pageSize = 10;
  currentPage = 0;

  searchString: any = '';


  pageSizeOptions: number[] = [5, 10, 25, 50]; // Options de taille de page

  constructor(private articleFeedService: ArticleFeedService, private route:ActivatedRoute) {

    route.params.subscribe(val => {
      if(route.snapshot.params['search'])
      {
        this.articles = [];
        this.searchString = route.snapshot.params['search'];
        this.getSearchedArticles(this.searchString);
      }
    });

  }



  ngOnInit(): void {
    if(!this.route.snapshot.params['search']) {
      this.getArticles();
    }
    this.getAuthors();
    this.getCategories();
  }

  async filterArticles() {
    this.responseMessage = '';

    const iziToast = await import('izitoast');

    this.articleFeedService.filter(this.filterData).subscribe(
      articles => {
        if(articles.status == 404) {
          return iziToast.default.error({title: 'Erreur', message: articles.message});
        }
        iziToast.default.success({title: 'Succès', message: 'Articles filtrés!'});
        console.log(articles);
        this.articles = articles;
        this.updatePage();
      });
  }

  setArticlesDisposition(disposition: string) {
    this.disposition = disposition;

    if(disposition == 'cards') {
      this.maxTitleChars = 30;
    }
    else {
      this.maxTitleChars = 60;
    }
  }

  getArticles(): void {
    this.articleFeedService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
        this.updatePage();
      });
  }

  getSearchedArticles(searchString: any): void {
    this.articles = [];
    this.articleFeedService.getSearchedArticles(searchString)
      .subscribe(async articles => {
        
        const iziToast = await import('izitoast');

        this.articles = articles;
        this.updatePage();
      });
    this.updatePage();
  }

  getAuthors(): void {
    this.articleFeedService.getAuthors()
      .subscribe(authors => {
        this.authors = authors;
      });
  }

  getCategories(): void {
    this.articleFeedService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
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
