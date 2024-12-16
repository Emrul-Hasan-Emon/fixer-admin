import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProposalResponse } from 'src/app/models/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  constructor(private http: HttpClient) { }

  public getProposalsForAFixer(fixerId: string): Observable<ProposalResponse> {
    const payload = {
      fixer_id: fixerId
    }
    return this.http.post<ProposalResponse>('/admin/get-proposals', payload);
  }
}
