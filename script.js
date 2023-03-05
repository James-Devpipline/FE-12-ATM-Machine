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
      const newAmount = this.accountBalance - amount;
      this.accountBalance = newAmount;
      return alert(
        `You have withdrew $${amount} from your account, your new balance is now $${newAmount}`
      );
    }
  }
}

class User extends Account {}

const firstUser = new User("John Doe");

function atmMain() {
  let isActive = true;

  const receipt = {
    withdrew: 0,
    depostied: 0,
  };

  while (isActive) {
    function atmMenu() {
      let menuPrompt = prompt(
        `Hello ${firstUser.accountName} \n[1] View Current Balance \n[2] Withdraw funds \n[3] Deposit funds \n[4] Exit`
      );

      if (menuPrompt) {
        if (menuPrompt === "1") {
          firstUser.viewBalance();
        } else if (menuPrompt === "2") {
          let withdrawAmount = prompt(
            `How much would you like to withdraw? \nYou currently have $${firstUser.accountBalance} in your account.`
          );

          if (firstUser.accountBalance < withdrawAmount) {
            alert(
              `WITHDRAWAL ERROR: \nYou have $${firstUser.accountBalance} in your account, you cannot take out $${withdrawAmount}`
            );
          } else {
            firstUser.atmChange((deposit = false), parseInt(withdrawAmount));
            receipt.withdrew += parseInt(withdrawAmount);
          }
        } else if (menuPrompt === "3") {
          let depositAmount = prompt(
            `How much would you like to deposit? \nYou currently have $${firstUser.accountBalance} in your account.`
          );

          firstUser.atmChange((deposit = true), parseInt(depositAmount));
          receipt.depostied += parseInt(depositAmount);
        } else if (menuPrompt === "4") {
          alert("GoodBye!");
          alert(
            `Reciept \nWithdrew $${receipt.withdrew} \nDeposited: $${receipt.depostied} \nBalance: $${firstUser.accountBalance}`
          );
          console.log(
            `Reciept \nWithdrew $${receipt.withdrew} \nDeposited: $${receipt.depostied} \nBalance: $${firstUser.accountBalance}`
          );
          isActive = !isActive;
        } else {
          console.error("INVALID INPUT");
          alert("Error: INVALID INPUT");
        }
      }
    }

    atmMenu();
  }
}

atmMain();
