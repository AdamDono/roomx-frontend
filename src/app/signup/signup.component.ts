import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-signup',
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  role: string = 'tenant';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signUp(this.email, this.password, this.role);
  }
}