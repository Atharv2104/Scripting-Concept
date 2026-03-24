
class BankAccount {
    constructor(accountHolderName, accountNo, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNo = accountNo;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
        document.write("<br>Amount Deposited: " + amount);
        document.write("<br>Updated Balance: " + this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
            console.log("Updated Balance:", this.balance);
            document.write("<br><br>Amount Withdrawn: " + amount);
            document.write("<br>Updated Balance: " + this.balance);
        } else {
            console.log("Insufficient Balance");
            document.write("<br><br>Insufficient Balance");
        }
    }

    display() {
        console.log("Account Holder Name:", this.accountHolderName);
        console.log("Account Number:", this.accountNo);
        console.log("Balance:", this.balance);

        document.write("<h3>Account Details</h3>");
        document.write("Account Holder Name: " + this.accountHolderName + "<br>");
        document.write("Account Number: " + this.accountNo + "<br>");
        document.write("Balance: " + this.balance + "<br>");
    }
}


let name = prompt("Enter Account Holder Name:");
let accNo = prompt("Enter Account Number:");
let balance = parseInt(prompt("Enter Initial Balance:"));

let account = new BankAccount(name, accNo, balance);

account.display();

let depositAmount = parseInt(prompt("Enter amount to deposit:"));
account.deposit(depositAmount);

let withdrawAmount = parseInt(prompt("Enter amount to withdraw:"));
account.withdraw(withdrawAmount);
