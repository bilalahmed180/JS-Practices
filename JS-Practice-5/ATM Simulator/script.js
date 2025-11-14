let balance = 1000;

const correctPin = "1234";

let Pin = prompt("Enter Your Pin");

let withdrawAmount;

if (Pin === correctPin) {

    let choice = prompt(
        "Welcome to JS ATM 💳\n\n" +
        "1️⃣ Check Balance\n" +
        "2️⃣ Withdraw\n" +
        "3️⃣ Deposit\n" +
        "4️⃣ Exit\n\n" +
        "Enter your choice (1-4):"
    );

    if (choice === "1") {
        alert("Your balance is: $" + balance);
    }
    
    else if (choice === "2") {
        withdrawAmount = (prompt("Enter amount to withdraw:"));

        if (withdrawAmount > balance) {
            alert("Insufficient funds!");
        }
        else {
            balance -= withdrawAmount;
            alert("Withdrawal successful! New balance: $" + balance);
        }
    }



}

else {
    alert("Incorrect PIN!");
}
