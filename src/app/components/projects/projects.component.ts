import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = projects;
}
