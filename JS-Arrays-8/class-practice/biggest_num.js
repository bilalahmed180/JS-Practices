let numbers = [12, 5, 20, 8, 30, 15, 100, 3];

let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log("Biggest number is:", biggest);
