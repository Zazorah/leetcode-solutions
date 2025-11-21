// Problem: Bank System
// Difficulty: Medium
// Link: https://leetcode.com/problems/simple-bank-system/description/?envType=daily-question&envId=2025-11-21

class Bank {
  private n: number;
  private balance: number[];

  constructor(balance: number[]) {
    this.n = balance.length;
    this.balance = balance;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (!this.accountValid(account1) || !this.accountValid(account2)) {
      // console.log("Invalid account number used.");
      return false;
    }

    console.log(
      `Attempting to transfer $${money} from account ${account1} (${this.getAccountBalance(
        account1
      )}) to account ${account2} (${this.getAccountBalance(account2)})`
    );

    const withdrawResult = this.withdraw(account1, money);
    if (!withdrawResult) {
      return false;
    }

    const depositResult = this.deposit(account2, money);
    if (!depositResult) {
      return false;
    }

    return true;
  }

  deposit(account: number, money: number): boolean {
    if (!this.accountValid(account)) {
      // console.log("Invalid account number used.");
      return false;
    }

    console.log(
      `Attempting to deposit $${money} into account ${account} (${this.getAccountBalance(
        account
      )})`
    );
    const currBalance = this.getAccountBalance(account);
    this.setAccountBalance(account, currBalance + money);

    return true;
  }

  withdraw(account: number, money: number): boolean {
    if (!this.accountValid(account)) {
      // console.log("Invalid account number used.");
      return false;
    }

    console.log(
      `Attempting to withdraw $${money} from account ${account} (${this.getAccountBalance(
        account
      )})`
    );

    const currBalance = this.getAccountBalance(account);
    if (currBalance >= money) {
      this.setAccountBalance(account, currBalance - money);
      return true;
    }

    return false;
  }

  private getAccountBalance(accountNum: number) {
    const index = accountNum - 1;
    return this.balance[index]!;
  }

  private setAccountBalance(accountNum: number, newValue: number) {
    const index = accountNum - 1;
    this.balance[index] = newValue;
  }

  private accountValid(accountNum: number) {
    return accountNum > 0 && accountNum <= this.n;
  }
}

// Test cases
const bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10)); // Expected: True
console.log(bank.transfer(5, 1, 20)); // Expected: True
console.log(bank.deposit(5, 20)); // Expected: True
console.log(bank.transfer(3, 4, 15)); // Expected: False
console.log(bank.withdraw(10, 50)); // Expected: False
