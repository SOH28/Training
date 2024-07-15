import { Component, Input } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'chatty';
  
  @Input() isAuthenticated: boolean = false;

  constructor(private router: Router) {}
  onLogin() {
    this.router.navigate(['/login']);
  }
}
