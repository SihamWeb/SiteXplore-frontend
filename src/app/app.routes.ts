import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberSpaceComponent} from "./member-space/member-space.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegisterComponent} from "./register/register.component";
import {ForgottenPasswordComponent} from "./forgotten-password/forgotten-password.component";
import {QuizComponent} from "./quiz/quiz.component";
import {RankingQuizComponent} from "./ranking-quiz/ranking-quiz.component";

export const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'mon-compte', component : MemberSpaceComponent },
  { path : 'connexion', component : LogInComponent },
  { path : 'inscription', component : RegisterComponent },
  { path : 'mot-de-passe-oublie', component : ForgottenPasswordComponent },
  { path : 'quiz', component : QuizComponent },
  { path : 'classement-au-quiz', component : RankingQuizComponent }
];
