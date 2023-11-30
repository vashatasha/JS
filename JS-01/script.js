let salary = prompt("What is your salary per month?");
let percentage = prompt("What percentage would you like to save?");

let savings = salary * percentage * 12 / 100;
alert (`Your savings will be ${savings} per one year!`);