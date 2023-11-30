let allFloors = prompt("What is the number of floors in a house?");
let amountFlats = prompt("How many flats are on the floor?");
let flatNumber = prompt("What is the number of the flat that you looking for?");

let entrance = Math.ceil (flatNumber / (allFloors * amountFlats));
let residual = flatNumber % (allFloors * amountFlats);
let floor =  Math.ceil(residual / amountFlats);
alert (`The flat is in ${entrance} entrance on ${floor} floor!`);