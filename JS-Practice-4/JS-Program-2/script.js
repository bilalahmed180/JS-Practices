let savedEmail = "bilalahmed@gmail.com";
let savedPassword = 1234;


let userEmail = prompt("Enter your email:");
let userPassword = prompt("Enter your password:");



let loginSuccess = userEmail == savedEmail + userPassword == savedPassword;

console.log("Login Successful:", loginSuccess);
