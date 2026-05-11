import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StacksComponent } from '../../components/stacks/stacks.component';
import { LearningComponent } from '../../components/learning/learning.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ContactComponent, HeroComponent, StacksComponent, LearningComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
