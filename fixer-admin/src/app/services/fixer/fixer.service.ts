import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fixer, FixerResponse } from 'src/app/models/fixer';

@Injectable({
  providedIn: 'root'
})
export class FixerService {
  private newFixerURL: string = '/admin/new-fixers';
  private oldFixerURL: string = '/admin/registered-fixers';
  private fixerDetails = new BehaviorSubject<any>(null);
  public newFixer = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  public getNewlyRegisteredFixers(): Observable<FixerResponse> {
    return this.http.get<FixerResponse>(this.newFixerURL);
  }

  public getRegisteredFixers(): Observable<FixerResponse> {
    return this.http.get<FixerResponse>(this.oldFixerURL);
  }

  public approveNewFixer(fixerId: string): Observable<any> {
    const payload = {
      fixer_id: fixerId
    };
    return this.http.post('/admin/approve-fixer', payload);
  }

  public declineFixer(fixerId: string): Observable<any> {
    const payload = {
      fixer_id: fixerId
    };
    console.log('payload: ', payload);
    
    return this.http.post('/admin/decline-fixer', payload);
  }

  public publishFixerDetails(fixer: Fixer) {
    this.fixerDetails.next(fixer);
  }

  public getPublishedFixerDetails() {
    return this.fixerDetails.asObservable();
  }

  public triggerEventForNewFixer(value: boolean) {
    this.newFixer.next(value);
  }

  public getEventForNewFixer(): Observable<any> {
    return this.newFixer.asObservable();
  }
}
