import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for ngModel
  styleUrls: ['./signup.component.css'],
  providers: [ApiService], // Add ApiService to providers
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'tenant'; // Default role

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.signUp(this.name, this.email, this.password, this.role).subscribe(
      (response: any) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error: any) => {
        console.error('Signup failed:', error);
      }
    );
  }
}