import { Component } from '@angular/core';
import { FooterComponent } from '../sections/footer/footer.component';
import { HeaderComponent } from '../sections/header/header.component';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {LogInService} from "./log-in.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthenticationInterceptorModule} from "../interceptor/authentication-interceptor.module";

@Component({
  selector: 'app-log-in',
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
    AuthenticationInterceptorModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  title = 'Se connecter';

  credentials: any = {};
  responseMessage: string = '';
  message: string = '';

  constructor(
    private loginService: LogInService,
    private router: Router
  ) {}

  login() {
    console.log('Login Angular called');
    if (!this.credentials.email) {
      this.responseMessage = 'Aucun email renseigné';
      return;
    }

    if (!this.credentials.password) {
      this.responseMessage = 'Aucun mot de passe renseigné';
      return;
    }

    this.loginService.login(this.credentials).subscribe(
      (response) => {
        if (response.message.token) {
          localStorage.setItem('token', response.message.token);
          this.router.navigate(['/mon-compte']);
        } else {
          this.responseMessage = response.message.error;
        }
      },
      (error) => {
          this.responseMessage = 'Erreur lors de la connexion : ' + error.message;
      }
    );
  }




}
