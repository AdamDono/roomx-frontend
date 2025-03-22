import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false; // Add this property

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
  }

  closeMenu() {
    this.isMenuOpen = false; // Close the menu
  }
}