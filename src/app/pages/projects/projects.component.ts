import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Corrected to styleUrls
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @Input() projects: any;

  ngOnInit() { }

  ngAfterViewInit() {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    cards.forEach(card => {
      observer.observe(card); // Observe each project card
    });
  }
}
