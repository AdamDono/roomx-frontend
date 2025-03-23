import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
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