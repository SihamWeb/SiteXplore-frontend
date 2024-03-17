import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  title = 'Quiz';
}
