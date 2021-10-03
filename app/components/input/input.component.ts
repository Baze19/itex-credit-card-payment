import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {  FormControl } from '@angular/forms';
import { PaymentService } from 'src/app/paymentService/payment.service';
import { CreditCardDto } from 'src/app/creditcardDto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  cardForm = this.fb.group({
    cardNumber: ['', Validators.required],
    cardHolder: ['',Validators.required] ,
    expiryDate:[Date.now(),Validators.required],
    amount: ['',Validators.required,Validators.min(1)] ,
    securityCode: ['',Validators.required,],
     

  });
  constructor(private fb: FormBuilder, private payment:PaymentService,private toast:ToastrService, private route :Router) { }
 
  //form validation function
  get cardNumber() { return this.cardForm.get('cardNumber'); }
  get cardHolder() { return this.cardForm.get('cardHolder'); }
  get expiryDate() { return this.cardForm.get('expiryDate'); }
  get amount() { return this.cardForm.get('amount'); }
  get securityCode() { return this.cardForm.get ('securityCode'); }

  onSubmit(){
    try {
      this.payment.addPayment(this.cardForm.value)
      this.toast.success('payment successful','payment',{
        timeOut:1000,
        progressBar:true,
       
      })
    } catch (error) {
      this.toast.error('not succesful')
    }
   //route back to the card list immediately after adding payment
    this.route.navigateByUrl('/')
  }

  ngOnInit(): void {
  }
}
