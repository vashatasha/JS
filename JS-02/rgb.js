let red = prompt("Please fill in a percentage of red color?");
let green = prompt("Please fill in a percentage of green color?");
let blue = prompt("Please fill in a percentage of blue color?");

let rgbRed = Math.abs(red).toString(16); 
let rgbGreen = Math.abs(green).toString(16); 
let rgbBlue = Math.abs(blue).toString(16); 
let rgb = (rgbRed)+(rgbGreen)+(rgbBlue);

alert (`This is your color #${rgb}!`);