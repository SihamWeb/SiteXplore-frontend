import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgIf, NgFor, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Page d\'accueil';

  articles: any = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.homeService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
      });
  }
}
