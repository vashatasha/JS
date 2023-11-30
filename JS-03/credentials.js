let surname = prompt("What is your surname?");
let Name = prompt("What is your name?");
let fathersName = prompt("What is your father`s name?");

surname = surname.trim().toLowerCase();
Name = Name.trim().toLowerCase();
fathersName = fathersName.trim().toLowerCase();

surname = surname[0].toUpperCase() + surname.slice(1);
Name = Name[0].toUpperCase() + Name.slice(1);
fathersName = fathersName[0].toUpperCase() + fathersName.slice(1);


alert (`Hello ${surname} ${Name} ${fathersName}!`);