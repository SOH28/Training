import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  tabs = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Careers',
      link: '/careers'
    }
  ]
}
