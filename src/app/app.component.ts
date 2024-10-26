import { Component } from '@angular/core';
import { projects } from './utilities/projects';
import { skills } from './utilities/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unknown';

  projects = [...projects]
  skills = [...skills]

}
