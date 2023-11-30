let Amount = prompt("Please fill in an amount in hryvnia?");
const rate = 37.3

let inDollars = (Amount / rate).toFixed(2);
alert (`Your amount is equal to ${inDollars}$!`);