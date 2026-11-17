import { DioAccount } from "./DioAccount";

export class BugAccount extends DioAccount {
    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void =>{
        if (amount <= 0 && this.validateStatus()) {
            throw new Error("Valor de depósito inválido!")
        }
        let total: number = amount + 10
        this.internalDeposit(total)
    }
}