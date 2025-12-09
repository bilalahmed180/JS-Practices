function random_num() {
    return Math.floor(Math.random() *10) + 1;
}

let name = prompt("Enter Your Name");
let luckyNum = random_num();

alert(name + " , Your Lucky Number is " + luckyNum);