import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
@Component({
  selector: 'app-article-feed',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './article-feed.component.html',
  styleUrl: './article-feed.component.scss'
})
export class ArticleFeedComponent {
  title = 'Flux d\'actualités';
}
