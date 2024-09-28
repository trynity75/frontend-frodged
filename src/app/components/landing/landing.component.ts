import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingCarouselComponent } from '../landing-carousel/landing-carousel.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, LandingCarouselComponent, CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  isRegisterMode: Boolean = true;
  isLoginMode: Boolean = true;

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;

    this.isLoginMode = !this.isLoginMode
  }

  email: string = ''
  password: string = ''

  constructor(private authService: AuthService, private router: Router) { }
  


  registerUser(): void {
    this.authService.register(this.email, this.password).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  loginUser(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log(response)
        sessionStorage.setItem("id", response.id);
        sessionStorage.setItem("token", response.token);
        this.router.navigate(['/products'])

      },
      error => {
        console.log(error)
      }
    )
  }
}
