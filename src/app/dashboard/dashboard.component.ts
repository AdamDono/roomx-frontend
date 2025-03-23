import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true, // Ensure it's standalone
  imports: [CommonModule], // Import CommonModule for *ngIf
  styleUrls: ['./dashboard.component.css'],
  providers: [ApiService], // Add ApiService to providers
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getProfile().subscribe(
      (response: any) => {
        this.user = response;
      },
      (error: any) => {
        console.error('Failed to fetch profile:', error);
        this.router.navigate(['/login']); // Redirect to login if unauthorized
      }
    );
  }

  logout(): void {
    this.apiService.logout();
    this.router.navigate(['/login']); // Redirect to login page
  }
}