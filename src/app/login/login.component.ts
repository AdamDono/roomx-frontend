import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Standalone component (no module needed)
  imports: [CommonModule, ReactiveFormsModule,RouterLink], // Import ReactiveFormsModule
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
      this.apiService.login(
        this.loginForm.value.email!,
        this.loginForm.value.password!
      ).subscribe({
        next: (response) => {
          this.safeStoreToken(response.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => console.error('Login failed:', err)
      });
    }
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