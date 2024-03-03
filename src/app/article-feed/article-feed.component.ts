import { Component } from '@angular/core';

@Component({
  selector: 'app-article-feed',
  standalone: true,
  imports: [],
  templateUrl: './article-feed.component.html',
  styleUrl: './article-feed.component.scss'
})
export class ArticleFeedComponent {
  title = 'Flux d\'actualités';
}
