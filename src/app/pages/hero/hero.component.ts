import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit() {
    const heroContent = document.querySelector('.hero-content');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroContent!.classList.add('visible'); // Add visible class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    if (heroContent) {
      observer.observe(heroContent); // Observe the hero content
    }
  }
}
