import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BugAccount } from './class/BugAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.getBalance()
peopleAccount.withdraw(5)
peopleAccount.getBalance()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10)
companyAccount.getLoan(100)
companyAccount.getBalance()
companyAccount.withdraw(50)
companyAccount.getBalance()
console.log(companyAccount)

const bugAccount: BugAccount = new BugAccount("Conta Bugada", 2222)
console.log(bugAccount)
bugAccount.deposit(20)
console.log(bugAccount)