let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
let position = str.indexOf("<br />");
let firstPart = str.slice(0, 33);
let secondPart = str.slice(39);
let result = firstPart + secondPart;

console.log(result) //якийсь текст, в якому є один тег і всяке інше