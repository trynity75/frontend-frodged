import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LandingCarouselComponent } from './components/landing-carousel/landing-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingComponent,LandingCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-frodge';
}
