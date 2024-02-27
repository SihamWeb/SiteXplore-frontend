import { Routes } from '@angular/router';
import{ HomeComponent } from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberSpaceComponent} from "./member-space/member-space.component";

export const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'mon-compte', component : MemberSpaceComponent }
];
