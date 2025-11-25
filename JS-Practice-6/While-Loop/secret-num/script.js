let gamenum = 25;
let usernum = prompt("Guess the game number :");

while (usernum != gamenum){
    usernum = prompt("You Entered wrong number : Guess Again");
}

alert("Congratulations, You entered right number");