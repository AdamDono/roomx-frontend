import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'tenant'; // Default role

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.signUp(this.name, this.email, this.password, this.role).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error) => {
        console.error('Signup failed:', error);
      }
    );
  }
}