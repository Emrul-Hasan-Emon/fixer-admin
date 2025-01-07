import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    public isLogin =  new BehaviorSubject<any>(null);
  
  constructor(private http: HttpClient) { }
  public login(username: string, password: string): Observable<any> {
    const payload = {
      username: username,
      password: password
    }
    return this.http.post("/admin/login", payload);
  }

  public emitLogin(flag: boolean) {
    this.isLogin.next(flag);
  }

  public getIsLogin() {
    return this.isLogin.asObservable();
  }
}
