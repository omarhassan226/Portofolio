import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  isVisible = false; // Track visibility state

  ngAfterViewInit() {
    const aboutSection = document.querySelector('.about-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Set visibility to true when the section is in view
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    });

    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }
}
