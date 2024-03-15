import {Component, OnInit} from '@angular/core';
import {MemberSpaceService} from "./member-space.service";
import {CommonModule} from "@angular/common";
import {AuthenticationInterceptorModule} from "../interceptor/authentication-interceptor.module";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-member-space',
  standalone: true,
  imports: [
    CommonModule,
    AuthenticationInterceptorModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './member-space.component.html',
  styleUrl: './member-space.component.scss'
})
export class MemberSpaceComponent implements OnInit {
  title = 'Espace membre';

  user: any;

  constructor(
    private memberSpaceService: MemberSpaceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.memberSpaceService.getUserConnected().subscribe(
      user => {
        this.user = user;
      },
      error => {
        if (error.status === 401) {
          this.router.navigate(['/connexion']);
        } else {
          console.log('Erreur lors de la récupération des informations de l\'utilisateur : ', error);
        }
      }
    );
  }

  isLoggedIn(): boolean {
    return this.memberSpaceService.isLoggedIn();
  }
}
