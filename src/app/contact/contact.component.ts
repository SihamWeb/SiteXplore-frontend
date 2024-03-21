import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
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
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  title = 'Contactez-nous';

  contactInfo: any = {};
  responseMessage: string = '';

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  async contact() {
    this.responseMessage = '';
    var iziToast = await import('izitoast');
    console.log('Contact Angular called');

    if(!this.contactInfo.firstName)
    {
      this.responseMessage = 'Veuillez saisir votre prénom.';
    }

    else if(!this.contactInfo.lastName)
    {
      this.responseMessage = 'Veuillez saisir votre nom de famille.';
    }

    else if(!this.contactInfo.email)
    {
      this.responseMessage = 'Veuillez saisir votre adresse mail.';
    }

    else if(!this.contactInfo.subject)
    {
      this.responseMessage = 'Veuillez saisir un sujet pour votre message.';
    }

    else if(!this.contactInfo.content)
    {
      this.responseMessage = 'Veuillez saisir un message.';
    }

    if(this.responseMessage)
    {
      return iziToast.default.error({
        title: 'Erreur',
        message: this.responseMessage,
      });
    }

    this.contactService.contact(this.contactInfo);
    this.responseMessage = 'Votre message a bien été envoyé!';

    return iziToast.default.success({
      title: 'Succès',
      message: this.responseMessage,
    });
      
  }
}
