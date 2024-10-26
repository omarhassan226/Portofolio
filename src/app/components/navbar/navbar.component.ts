import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.5s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isMobileMenuOpen = false;
  showNavbar = false;

  ngOnInit() {
    setTimeout(() => {
      this.showNavbar = true;
    }, 0);
  }

  openModel() {
    this.isOpen = !this.isOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(event: Event, targetId: string): void {
    event.preventDefault(); // Prevent default anchor click behavior
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
    }
  }
}
