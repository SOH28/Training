import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  error: boolean|string = false;

  toggleP: boolean = false;

  loginData: { username: string, password: string } = {
    username: '',
    password: ''
  };

  http = inject(HttpClient)

  onLogin() {
    this.http.post('http://localhost:3001/login', this.loginData).subscribe((res: any) => {
      console.log(res);
      if (!res) {
        this.error = 'An error occurred';
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
      if (res.state) {
        this.router.navigate(['/home']);
      } else {
        this.error = res.reason;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    });
  }

  onSignup() {
    this.router.navigate(['signup']);
  }
}
