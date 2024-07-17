import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) {}

  signupData: { username: string, password: string, email: string, retypePassword: string, name: string } = {
    username: '',
    password: '',
    retypePassword: '',
    email: '',
    name: ''
  };

  error: [string|false, string] = [false, ''];
  toggleP: boolean = false;
  toggleRP: boolean = false;

  validateForm(data: { username: string, password: string, email: string, retypePassword: string, name: string }) {
    if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(data.email)))
      return [false, 'Invalid email address', 'email'];
    else if (!(/^[a-zA-Z0-9]+$/.test(data.username)))
      return [false, 'Username must contain only letters and numbers', 'username'];
    else if (data.password.length < 8)
      return [false, 'Password must be at least 8 characters long', 'password'];
    else if (!(/[A-Z]/.test(data.password)))
      return [false, 'Password must contain at least one uppercase letter', 'password'];
    else if (!(/[a-z]/.test(data.password)))
      return [false, 'Password must contain at least one lowercase letter', 'password'];
    else if (!(/[0-9]/.test(data.password)))
      return [false, 'Password must contain at least one number', 'password'];
    else if (!(/[^A-Za-z0-9]/.test(data.password)))
      return [false, 'Password must contain at least one special character', 'password'];
    else if (data.password !== data.retypePassword)
      return [false, 'Passwords do not match', 'repassword'];
    else

    return [true, ''];
  }

  http = inject(HttpClient);

  onSignup() {
    const isValid: any = this.validateForm(this.signupData);
    if (!isValid[0]) {
      this.error = [isValid[1], isValid[2]];
      setTimeout(() => {
        this.error = [false, ''];
      }, 3000);
    } else {
      this.http.post('http://localhost:3001/signup', this.signupData).subscribe((res: any) => {
        if (!res) {
          this.error = ['An error occurred', ''];
          setTimeout(() => {
            this.error = [false, ''];
          }, 3000);
        }
        if (res.state) {
          this.router.navigate(['/login']);
        } else {
          this.error = [res.reason, ''];
          setTimeout(() => {
            this.error = [false, ''];
          }, 3000);
        }
      });
    }
  }
}
