import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fixer-admin';
  isLoggedIn = false

  constructor(
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginService.getIsLogin().subscribe(
      (data: any) => {
        this.isLoggedIn = data;
        if (this.isLoggedIn) {
          this.router.navigate(['welcome']);
        }
      }
    )
  }
}
