import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-forgotten-password',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.scss'
})
export class ForgottenPasswordComponent {
  title='Récupérer mon mot de passe';
}
