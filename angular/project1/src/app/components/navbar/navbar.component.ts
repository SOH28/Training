import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  currentTab = 'home';

  onTabChange(tab: string) {
    this.currentTab = tab;
    this.router.navigate([`/home/${tab}`]);
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
