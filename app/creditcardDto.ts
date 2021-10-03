export interface CreditCardDto {
    cardNumber: string,
    cardHolder: string,
    expiryDate: Date,
    amount: number,
    securityCode?: string,


}