import {Component, importProvidersFrom} from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import {Router, ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';
import {RegisterService} from "./register.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationInterceptorModule} from "../interceptor/authentication-interceptor.module";
//import {Router} from "express";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthenticationInterceptorModule
  ],
  providers: [HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  title='S\'inscrire';

  user: any;
  newData: any = {};
  message: string [] = [];
  responseMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router
  ) {}
ngOnInit(): void {

    const activationToken = this.route.snapshot.queryParams['token'];
    if (activationToken) {
      this.confirmRegistration(activationToken);
    }
  }

  register(): void {
    this.registerService.register(this.newData).subscribe(
      response => {
        this.responseMessage = response.message;
        const token = response?.token;
        if (token) {
          localStorage.setItem('token', token);
        }
      },
      error => {
        this.responseMessage = 'Une erreur s\'est produite lors de l\'inscription.';
      }
    );
  }

  confirmRegistration(activationToken: string): void {
    this.registerService.confirmRegistration(activationToken).subscribe(
      response => {
        this.message = response.message;
        localStorage.setItem('token', response.message.token);
        this.router.navigate(['/mon-compte', this.message]);
      },
      error => {
        this.responseMessage = 'Erreur lors de la confirmation de l\'inscription';
      }
    );
  }
}
