import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [FormsModule,RouterLink], // Import FormsModule for ngModel
  styleUrls: ['./signup.component.css'],
  providers: [ApiService], // Add ApiService to providers
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'tenant'; // Default role


  constructor(private apiService: ApiService, private router: Router) {}

// Update your signup.component.ts onSubmit()
onSubmit(): void {
  this.apiService.signUp(this.name, this.email, this.password, this.role).subscribe({
    next: (response) => {
      console.log('Signup successful:', response);
      this.safeStoreToken(response.access_token);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => console.error('Signup failed:', err)
  });
}

private safeStoreToken(token: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('access_token', token);
    }
  } catch (e) {
    console.warn('Failed to store token:', e);
  }
}
}