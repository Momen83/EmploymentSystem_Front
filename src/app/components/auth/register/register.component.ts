import { Component } from '@angular/core';
import { Router , RouterModule} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule , RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { Username: '', Password: '', Role: ''};
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  register() {
    this.authService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      (error) => {
        this.errorMessage = 'Registration failed. Try again.';
      }
    );
  }
}
