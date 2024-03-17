import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  title = 'Carte intéractive';
}
