import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { Username: '', Password: '' };
  errorMessage: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        this.authService.storeToken(response.token);
        console.log(response);
        console.log(response.user);
        localStorage.setItem('userRole', response.role); // Store user role
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }

}
