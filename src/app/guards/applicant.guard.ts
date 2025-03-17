import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApplicantGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'Applicant') {
      return true; // Allow access
    } else {
      this.router.navigate(['/']); // Redirect unauthorized users
      return false;
    }
  }
}