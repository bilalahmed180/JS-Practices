let countries = ["pakistan", "India", "USA", "England", "Australia"];
countries.push("Saudia Arabia");
countries.pop();
let isPresent = countries.includes("USA");
let notPresent = countries.includes("Turkey");

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
}

if (isPresent) {
    console.log("haan bhai hega USA");
}

console.log(notPresent);
