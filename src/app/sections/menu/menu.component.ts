import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  faBars = faBars;
  faUser = faUser;
  faSearch = faSearch;

  searchString: string = '';

  constructor(private router: Router) { }

  search() {
    this.router.navigate([`/`]);
    this.router.navigate([`/flux-d-actualites/search/${this.searchString}`]);
    this.searchString = '';
  }
}
