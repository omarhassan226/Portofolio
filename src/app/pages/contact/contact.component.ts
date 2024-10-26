import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  constructor() { }

  // @ViewChild('contactSection') contactSection!: ElementRef;

  isVisible = false; // Track visibility state

  ngAfterViewInit() {
    const heroContent = document.querySelector('.contact');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          heroContent!.classList.add('visible'); // Add visible class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });

    if (heroContent) {
      observer.observe(heroContent); // Observe the hero content
    }
  }

  onSubmit(form: NgForm) {
    // Check if the form is valid
    if (form.valid) {
      const name = form.value.name;
      const email = form.value.email;
      const message = form.value.message;

      // Here you can implement what happens with the form data
      // For example, you might send it to an API or email service

      console.log('Form Submitted:', { name, email, message });

      // Optionally reset the form after submission
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
