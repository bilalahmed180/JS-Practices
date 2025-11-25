let emoji = prompt("Enter an emoji:");
let count = +prompt("Enter how many times to print it:");

let result = "";

for (let index = 0; index < count; index++) {
    result += emoji;
}

alert(result);