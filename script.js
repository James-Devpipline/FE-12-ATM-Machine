/*
OOP - ATM assignment
********************************************
Due: Mon 3/6
Virtual ATM Machine (OOP Project)
- Build a console app that mimics an atm machine
- Persitent balance (CRUDable)
- Main Menu that routes to other menus 
  *********
  Welcome
  1) view balance
   ..... etc
  *********
- Redirect back to the main menu
- Error handling for withdrawals 
- Deposit
- Withdrawal
- View Balance
- Exit the program via selection
- Receipt 
- BONUS:
  - Include pin number for users
  - Easter Egg code for FBI Lockout


HAVE FUN
*/

class Account {
  constructor(accountName, accountBalance = 1000) {
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }

  viewBalance() {
    return alert(
      `${this.accountName}, you have $${this.accountBalance} in your account`
    );
  }

  atmChange(deposit, amount) {
    if (deposit) {
      const newAmount = this.accountBalance + amount;
      this.accountBalance = newAmount;
      return alert(
        `You have deposited $${amount} to your account. \nYour new balance is now $${newAmount}`
      );
    } else {
      if (amount > this.accountBalance) {
        return alert(
          `WITHDRAWAL ERROR: \nYou have $${this.accountBalance} in your account, you cannot take out $${amount}`
        );
      } else {
        const newAmount = this.accountBalance - amount;
        this.accountBalance = newAmount;
        return alert(
          `You have withdrew $${amount} from your account, your new balance is now $${newAmount}`
        );
      }
    }
  }
}

class User extends Account {}

const firstUser = new User("John Doe");

firstUser.viewBalance();
firstUser.atmChange((deposit = true), 500);
firstUser.viewBalance();
firstUser.atmChange((deposit = false), 2500);
firstUser.viewBalance();
firstUser.atmChange((deposit = false), 1500);
firstUser.viewBalance();

// function atmMain() {
//   isActive = true;

//   function atmMenu() {}

//   function atmDeposit() {}

//   function atmWithdrawal() {}

//   function viewBalance() {}

// while (isActive) {

// }
// }
