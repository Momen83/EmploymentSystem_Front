import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7228/api/Users';
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  storeToken(token: string) {
    localStorage.setItem('jwtToken', token);
    const userRole = this.getUserRoleFromToken(token);
    
    console.log(userRole);
    if (userRole) {
      localStorage.setItem('userRole', userRole); // Store the role
    }
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  
  getUserRoleFromToken(token: string): string | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
      console.log(payload);
      return payload.role || null; // Extract 'role' field
    } catch (e) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userRole');

  }

}
