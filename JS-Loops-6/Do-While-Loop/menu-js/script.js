alert("1. Pizza\n 2. Burger\n 3. Drinks");

do {
    let userask = prompt("Do you want to see the menu again? yes/no");
    if (userask == "yes") {
        alert("1. Pizza\n 2. Burger\n 3. Drinks");
    }
} while (userask == "yes");