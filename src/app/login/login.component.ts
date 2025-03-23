import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.logIn(this.email, this.password);
  }
}