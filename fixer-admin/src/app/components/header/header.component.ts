import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getIsLogin().subscribe(
      (data: any) => {
        this.isLogin = data;
      }
    )
  }

  public navigateToLoginPage() {
    console.log('Navigate to Login Page');    
    this.router.navigate(['login']);
  }

  public navigateToLogoutPage() {
    this.loginService.emitLogin(false);
  }
}
