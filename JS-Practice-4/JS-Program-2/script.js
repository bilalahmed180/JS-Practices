let savedEmail = "bilalahmed@gmail.com";
let savedPassword = 1234;


let userEmail = prompt("Enter your email:");
let userPassword = prompt("Enter your password:");



(userEmail === savedEmail && userPassword == savedPassword)
  ? alert("Login Successfully ✅")
  : alert("Login Failed ❌");
