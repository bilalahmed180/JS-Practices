let choose = prompt("Drink tea or coffee");
function makeDrink(choice) {
    if (choose === "tea") {
        return "☕ Your tea is ready!";
    } else if (choose === "coffee") {
        return "🍵 Your coffee is ready!";
    } else {
        return "❌ Please choose tea or coffee.";
    }
}

alert(makeDrink("☕ Your tea is ready!"));
alert(makeDrink("🍵 Your coffee is ready!"));
