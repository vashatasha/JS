let str = "якийсь текст у якому є один тег <br /> і всяке інше"
let position = str.indexOf("<br />");
let firstPart = str.slice(0, 33);
let secondPart = str.slice(33, 39).toUpperCase();
let thirdPart = str.slice(39);

let result = firstPart + secondPart + thirdPart;


console.log(result) //якийсь текст, в якому є один тег <BR /> і всяке інше