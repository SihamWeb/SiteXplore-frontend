import { HeaderComponent } from '../sections/header/header.component';
import { FooterComponent } from '../sections/footer/footer.component';
import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


declare function setMap(): any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})




export class MapComponent implements AfterViewInit {
  title = 'Carte intéractive';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }





  async initMap() {

  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setMap();
    }
  }
}
