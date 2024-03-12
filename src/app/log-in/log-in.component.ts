import { Component } from '@angular/core';
import { FooterComponent } from '../sections/footer/footer.component';
import { HeaderComponent } from '../sections/header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  title = 'Se connecter';
}
