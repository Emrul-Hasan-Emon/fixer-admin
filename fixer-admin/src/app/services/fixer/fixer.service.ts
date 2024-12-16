import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fixer, FixerResponse } from 'src/app/models/fixer';

@Injectable({
  providedIn: 'root'
})
export class FixerService {

  constructor(private http: HttpClient) { }
  private newFixerURL: string = '/admin/new-fixers';
  private oldFixerURL: string = '/admin/registered-fixers';
  private fixerDetails = new BehaviorSubject<any>(null);

  public getNewlyRegisteredFixers(): Observable<FixerResponse> {
    return this.http.get<FixerResponse>(this.newFixerURL);
  }

  public getRegisteredFixers(): Observable<FixerResponse> {
    return this.http.get<FixerResponse>(this.oldFixerURL);
  }

  public publishFixerDetails(fixer: Fixer) {
    this.fixerDetails.next(fixer);
  }

  public getPublishedFixerDetails() {
    return this.fixerDetails.asObservable();
  }
}
