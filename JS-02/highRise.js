let allFloors = prompt("What is the number of floors in a house?");
let amountFlats = prompt("How many flats are on the floor?");
let flatNumber = prompt("What is the number of the flat that you looking for?")-1;

let entrance = Math.floor (flatNumber / (allFloors * amountFlats))+1;
let residual = flatNumber % (allFloors * amountFlats);
let floor =  Math.floor (residual / amountFlats)+1;
alert (`The flat is in ${entrance} entrance on ${floor} floor!`);
