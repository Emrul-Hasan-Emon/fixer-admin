import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

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

  constructor(private loginService: LoginService) {}

  togglePassword() {  // Add this method
    this.showPassword = !this.showPassword;
  }
  
  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      (data: any) => {
        if (data.message) {
          if (data.message == 'success') {
            this.loginService.emitLogin(true);
          } else {
            this.loginService.emitLogin(false);
          }
        }
      },
      (error) => {
        console.error(error);
        alert('An error occured while login');
      }
    )
  }
}
