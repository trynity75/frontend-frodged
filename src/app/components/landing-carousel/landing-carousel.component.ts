  import { Component } from '@angular/core';

  @Component({
    selector: 'app-landing-carousel',
    standalone: true,
    imports: [],
    templateUrl: './landing-carousel.component.html',
    styleUrl: './landing-carousel.component.css'
  })
  export class LandingCarouselComponent {
    currentIndex = 0;
    totalSlides = 3;

    prevSlide() {
      this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.totalSlides - 1;
      this.updateSlide();
    }

    nextSlide() {
      this.currentIndex = (this.currentIndex < this.totalSlides - 1) ? this.currentIndex + 1 : 0;
      this.updateSlide();
    }

    private updateSlide() {
      const inner = document.querySelector('.carousel-inner') as HTMLElement;
      if (inner) {
        inner.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      }
    }
  }
