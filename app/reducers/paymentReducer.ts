//this create a functions that accept the statYe and actios as argument and based on the action typpe,the state is modified
import { Action } from '@ngrx/store'
import { CreditCardDto } from '../creditcardDto'
import * as paymentlActions from '../actions/actions'
import { CustomAction } from '../actions/actions'
//the initial state was added just to verify if my store is actually working it is not mandatory
const initialState: CreditCardDto = {
    cardNumber: '1234',
    cardHolder: 'james mufu',
    expiryDate:new Date(),
    securityCode: "500",
    amount: 500,

}

//reducer to manage the state change
export function reducer(state: CreditCardDto[] = [initialState], action:CustomAction) {

    
    switch(action.type) {
        case paymentlActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}