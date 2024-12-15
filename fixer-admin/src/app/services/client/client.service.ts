import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public cartSource =  new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(this.formURL());
  }

  public publishClientInformation(client: Client) {
    this.cartSource.next(client);
  }

  public getPublishedClient(): Observable<Client> {
    return this.cartSource.asObservable();
  }
  
  private formURL(): string {
    return "/admin/client"
  }
}
