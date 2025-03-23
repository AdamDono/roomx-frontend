import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: User | null = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user) => {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
    });
  }

  // Sign up with email/password
  async signUp(email: string, password: string, role: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await result.user?.updateProfile({ displayName: role }); // Save role in user profile
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Signup error:', error);
    }
  }

  // Log in with email/password
  async logIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  // Log out
  async logOut() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  // Check if user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // Get user role
  get userRole(): string | null {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user?.displayName || null;
  }
}