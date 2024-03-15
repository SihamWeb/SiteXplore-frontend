import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AuthenticationInterceptor } from './authentication-interceptor.service';
import { routes } from '../app.routes';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    provideRouter(routes)
  ]
})
export class AuthenticationInterceptorModule { }
