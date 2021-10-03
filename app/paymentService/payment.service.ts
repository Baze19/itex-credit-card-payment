import { Injectable } from '@angular/core';
import { CreditCardDto } from '../creditcardDto';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public payment$ = new Subject<CreditCardDto>()

  constructor() { }

  addPayment (data:CreditCardDto) {
    this.payment$.next(data)
  }
}
