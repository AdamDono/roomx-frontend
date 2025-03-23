import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000'; // Flask backend URL

  constructor(private http: HttpClient) {}

  // Sign up a new user
  signUp(name: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { name, email, password, role });
  }

  // Log in an existing user
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('access_token', response.access_token); // Store the token
      })
    );
  }

  // Get user profile
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_profile`);
  }

  // Log out (client-side only)
  logout(): void {
    localStorage.removeItem('access_token');
  }
}