import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  togglePassword() {  // Add this method
    this.showPassword = !this.showPassword;
  }
  
  onSubmit() {
    // Handle login logic here
    console.log({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }
}
