import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {

  @Input() skills: any

  ngAfterViewInit() {
    const skillElements = document.querySelectorAll('.skill');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    skillElements.forEach(skill => {
      observer.observe(skill); // Observe each skill element
    });
  }

}
