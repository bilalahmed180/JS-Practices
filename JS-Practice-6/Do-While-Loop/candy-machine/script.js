alert("🍬 You ate a candy!");
let userask;

do {
    userask = prompt("Do you want more? (yes/more/no)");

    if (userask === "yes" || userask === "more") {
        alert("🍬 Eat another candy");
    }

} while (userask === "yes");