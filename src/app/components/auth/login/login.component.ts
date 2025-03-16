import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule , RouterModule],
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

        if (error.error && error.error.message) {
          this.errorMessage = error.error.message; // Extract message from backend response
        } else {
          this.errorMessage = 'Invalid username or password';
        }
         alert(this.errorMessage);
      }
    );
  }

}
