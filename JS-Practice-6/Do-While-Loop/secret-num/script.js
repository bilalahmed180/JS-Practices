let gamenum = 25;
let usernum = prompt("Guess the game number :");

do {
    usernum = prompt("You Entered wrong number : Guess Again");
} while (usernum != gamenum);

alert("Congratulations, You entered right number");