import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stacks } from './stacks';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss'],
})
export class StacksComponent {
  stacks = stacks;
}
