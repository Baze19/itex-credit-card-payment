import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreditCardDto } from './creditcardDto';
import { PaymentService } from './paymentService/payment.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app.state';
import * as paymentlActions from './actions/actions'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'CreditCard';
  showPayment: Observable<CreditCardDto[]>;
  paymentDetails: any 

  
  constructor(private payment:PaymentService, public store:Store<Appstate>,private route: Router){
    this.showPayment = store.select('payment')
    console.log('payment',this.showPayment)
  }
  ngOnInit() {
    this.payment.payment$.subscribe(data =>{
      this.store.dispatch(new paymentlActions.addPayment(data))
      
    })
  } 
  //UNSUBSCRIBE TO PREVENT MEMORY LEAAKAGE
  ngOnDestroy(){
    this.payment.payment$
  }
  //navigate to input page
  inputPage() {
    this.route.navigateByUrl('/input')
  }
  
}
