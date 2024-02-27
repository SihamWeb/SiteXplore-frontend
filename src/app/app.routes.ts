import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MemberSpaceComponent} from "./member-space/member-space.component";
import {LogInComponent} from "./log-in/log-in.component";
import {RegisterComponent} from "./register/register.component";
import {ForgottenPasswordComponent} from "./forgotten-password/forgotten-password.component";
import {QuizComponent} from "./quiz/quiz.component";
import {RankingQuizComponent} from "./ranking-quiz/ranking-quiz.component";
import {ArticleFeedComponent} from "./article-feed/article-feed.component";
import {MapComponent} from "./map/map.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {LegalNoticesComponent} from "./legal-notices/legal-notices.component";
import {DocumentaryResourcesComponent} from "./documentary-resources/documentary-resources.component";
import {CopyrightComponent} from "./copyright/copyright.component";

export const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'mon-compte', component : MemberSpaceComponent },
  { path : 'connexion', component : LogInComponent },
  { path : 'inscription', component : RegisterComponent },
  { path : 'mot-de-passe-oublie', component : ForgottenPasswordComponent },
  { path : 'quiz', component : QuizComponent },
  { path : 'classement-au-quiz', component : RankingQuizComponent },
  { path : 'flux-d-actualites', component : ArticleFeedComponent },
  { path : 'carte-interactive', component : MapComponent },
  { path : 'frise-chronologique', component : TimelineComponent },
  { path : 'mentions-legales', component : LegalNoticesComponent },
  { path : 'ressources-documentaires', component : DocumentaryResourcesComponent },
  { path : 'credits', component : CopyrightComponent }
];
