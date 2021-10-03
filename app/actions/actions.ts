import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CreditCardDto } from '../creditcardDto'

//action types
export const ADD_PAYMENT       = '[ADDPAYMENT] Add'
export const REMOVE_PAYMENT    = '[REMOVEPAYMENT] Remove'

//create a data transfer object for the actions
export interface CustomAction extends Action {
    type: string;
    payload?: any;
    }
    
//CREATE AN ACTION
export class addPayment implements Action {
    readonly type = ADD_PAYMENT

    constructor(public payload: any = null) {}
}

export class removePayment implements Action {
    readonly type = REMOVE_PAYMENT

    constructor(public payload: any= null) {}
}

//export the actions
export type Actions = addPayment | removePayment