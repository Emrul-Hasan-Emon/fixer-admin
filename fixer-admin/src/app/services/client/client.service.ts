import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(this.formURL());
  }

  private formURL(): string {
    return "/admin/client"
  }
}
