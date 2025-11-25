let userask;

do {
    userask = prompt("Say the magic word");

    if (userask === "khulja sim sim") {
        alert("✨ The door is open!");
    }
    else {
        alert("❌ Wrong word, try again!");
    }

} while (userask !== "khulja sim sim");