import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  toggleMenu() {
    const nav = document.getElementById("nav");
    if (nav) {
      nav.classList.toggle("active");
    }
  }

}
