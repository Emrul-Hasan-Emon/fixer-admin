import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url: string = '/PaymentInquiry/Inquire'
  constructor(
    private http: HttpClient
  ) { }

  public checkPaymentStatus(payment: Payment): Observable<any> {
    const payload = {
      pp_TxnRefNo: payment.pp_TxnRefNo,
      pp_MerchantID: payment.pp_MerchantID,
      pp_Password: payment.pp_Password,
      pp_SecureHash: payment.pp_SecureHash
    };
    return this.http.post(this.url, payload);
  }
}
