import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Standalone component (no module needed)
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule
  styleUrls: ['./login.component.css'],
  providers: [ApiService], // Add ApiService to providers
})
export class LoginComponent {
  loginForm: FormGroup; // Define FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.apiService.login(email, password).subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          localStorage.setItem('access_token', response.access_token); // Store the token
          this.router.navigate(['/dashboard']); // Redirect to dashboard
        },
        (error: any) => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
