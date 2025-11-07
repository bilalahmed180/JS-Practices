let firstnum = prompt("Enter Your First Number");
firstnum = Number(firstnum)

let secondnum = prompt("Enter Your First Second Number");
secondnum = Number(secondnum)


let operator = prompt("Which Methode use + , - , * , /");

let result = (operator = "+" ? firstnum + secondnum : error , operator = "-" ? firstnum - secondnum : error , operator = "*" ? firstnum * secondnum : error , operator = "/" ? firstnum / secondnum : error);

alert(result);