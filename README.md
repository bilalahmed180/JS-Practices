# JS-Practices

const heading = document.getElementById("heading");
console.log(heading);

// const para = document.getElementsByClassName("para");
// console.log(para);

const para = document.querySelectorAll(".para");
console.log(para);

heading .textContent ="Heloooooo World";
heading .innerHTML = "<i>italic text!</i>";

heading .style.backgroundColor = "#ff3";
// para[0].style.fontSize = "50px";
// para[1].style.fontSize = "50px";

heading.setAttribute('width', '100');
