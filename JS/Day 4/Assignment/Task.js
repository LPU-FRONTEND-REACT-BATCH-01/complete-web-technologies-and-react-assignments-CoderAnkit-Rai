let balance = 0;
let transactions = [];

function deposit(amount) {
    if (amount <= 0) {
        console.log("Deposit must be greater than 0");
        return;
    }
    console.log("Deposited: " + amount);
    balance += amount;
    transactions.push("Deposited: ₹" + amount);
}

function withdraw(amount) {
    if (amount <= 0) {
        console.log("Withdrawal must be greater than 0");
        return;
    }

    else if (amount > balance) {
        console.log("Insufficient balance");
        return;
    }

    else if (amount > 10000) {
        console.log("Max withdrawal is ₹10000");
        return;
    }

    else if (balance - amount < 500) {
        console.log("Minimum balance ₹500 required");
        return;
    }

    balance = balance - amount;
    transactions.push("Withdrawn: ₹" + amount);git 
}

function getBalance() {
    console.log("Balance: ₹"+ balance);
}

function getTransactions() {
    console.log("Transactions:\n" + transactions.join("\n"));
}

deposit(2000);     
// withdraw(500);     
// deposit(1000);    
// getBalance();
// getTransactions();