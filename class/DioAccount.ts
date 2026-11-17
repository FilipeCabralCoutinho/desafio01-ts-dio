export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  //setName = (name: string): void => {
    //this.name = name
    //console.log('Nome alterado com sucesso!')
  //}

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus() && amount > 0){
      this.balance += amount
      console.log('Depósito realizado com sucesso!')
    } else {
      throw new Error('Conta inválida ou valor de depósito inválido')
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus() && amount > 0 && amount <= this.balance){
      this.balance -= amount
      console.log('Saque realizado com sucesso!')
    } else if (amount > this.balance) {
      throw new Error('Saldo insuficiente')
    } else {
      throw new Error('Conta inválida ou valor de saque inválido')
    }
  }

  internalDeposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount
    }
  }

  getBalance = (): void => {
    console.log('Saldo: ' + this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
