import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StacksComponent } from '../../components/stacks/stacks.component';

@Component({
  selector: 'app-main',
  imports: [AboutComponent, ProjectsComponent, ContactComponent, HeroComponent, StacksComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
