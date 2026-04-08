import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleMenu() {
    if (isPlatformBrowser(this.platformId)) {
      const nav = document.getElementById("nav");
      if (nav) {
        nav.classList.toggle("active");
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('light-theme');

      if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
    }
  }
}
