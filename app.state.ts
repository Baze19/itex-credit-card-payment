//this is will help us read the data in the store
import { CreditCardDto } from "./app/creditcardDto";

export interface Appstate {
    readonly payment:CreditCardDto[]
}