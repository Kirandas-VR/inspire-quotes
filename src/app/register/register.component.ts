import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.username && this.email && this.password) {
      // Log data or send it to the backend
      console.log('User Registered:', { username: this.username, email: this.email, password: this.password });

      // Redirect to the login page
      this.router.navigate(['/login']);
    } else {
      alert('Please fill in all the fields.');
    }
  }

  getName(event: any) {
    this.username = event.target.value;
    console.log('Username:', this.username);
  }

  getEmail(email: any) {
    this.email = email.value;
    console.log('Email:', this.email);
    alert(`You entered: ${this.email}`);
  }
}
