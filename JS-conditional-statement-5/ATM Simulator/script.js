let balance = 1000;


const correctPin = "1234";

let Pin = prompt("Enter Your Pin");

let withdrawAmount;
let depositAmount;

if (Pin === correctPin) {

    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" + 
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +  
        "4️⃣ Exit\n\ n" +
        "Enter your choice (1-4):"
    );

    // choice 1 

    if (choice === "1") {
        alert("Your balance is: $" + balance);
    }
    
    // choice 2

    else if (choice === "2") { 
        withdrawAmount = prompt("Enter amount to withdraw:");

        if (withdrawAmount > balance) {
            alert("Insufficient funds!");
        }
        else {
            balance -= withdrawAmount;
            alert("Withdrawal successful! New balance: $" + balance);
        }
    }

    // choice 3

    else if (choice === "3") {
        depositAmount = prompt("Enter Your Deposit Amount");
        depositAmount = Number(depositAmount);
    }

    if (balance += depositAmount) {
         alert("Deposit successful! : $" + balance);
    }
    
    // choice 4
    else{
         alert("Thanks For Connecting JS ATM");
    }
    
}

else {
    alert("Incorrect PIN!");
}