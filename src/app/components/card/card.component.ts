import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] // Fixing the styleUrls property
})
export class CardComponent implements OnInit {

  designerOpacity = 1;
  coderOpacity = 1;
  designerVisible = false; // Track visibility for designer image
  coderVisible = false; // Track visibility for coder image

  ngOnInit() {
    // Trigger visibility after a short delay
    setTimeout(() => {
      this.coderOpacity = 0;
      this.designerVisible = true; // Show designer image
      this.coderVisible = true; // Show coder image
    }, 100); // Adjust delay as needed
  }

  // Method to handle mouse movement
  onMouseMove(event: MouseEvent): void {
    const windowWidth = window.innerWidth;
    const mouseX = event.clientX;

    if (mouseX < windowWidth / 2) {
      this.designerOpacity = 0;
      this.coderOpacity = 1;
    } else {
      this.designerOpacity = 1;
      this.coderOpacity = 0;
    }
  }
}
