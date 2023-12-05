
// confirms
let boolean = [
    confirm("Anybody home?"),
    confirm("Ви мокрі бандити?"),
    confirm("Ви мене спіймали?"),
  ];
  console.log(boolean);
// prompt
  let answers = []
    answers[0] = prompt("Хто є найвідомішим харківським письменником і філософом?"),
    answers[1] = prompt("Хто написав Енеїду (перший твір нової української літератури)?"),
    answers[2] = prompt("Хто був першим українським космонавтом?"),
  console.log(answers);

// Item change
let myArray = [];
let index = prompt("Введіть індекс у масиві:");
if (!isNaN(index)) {
  let value = prompt("Введіть значення для цього індексу:");
  myArray[index] = value;
  console.log(myArray);
} else {
  alert("Ви ввели некоректний індекс. Будь ласка, введіть число.");
}
// Multiply table
const arr = [];
for (let i = 0; i <= 5; i++) {
  arr[i] = [];
  for (let j = 0; j <= 5; j++) {
    arr[i][j] = (i) * (j);
  }
}
console.log(arr);
console.log (arr [1] [3]);

// Multiply table slice
const exceptO = arr.slice(1);
console.log(exceptO);

//IndexOf Word
let text = prompt("Введіть ваш текст:");
let word = prompt("Введіть ключове слово:");
let words = text.split(" ");
let indexWord = words.indexOf(word);
if ( indexWord !== -1) {
    let position = indexWord+1;
    alert (`Це слово є ${position}м в рядку`);
}
else {
    alert (`Цього слова не було в тексті`)
}
//Reverse
let originalArray = [];
for (let i = 0; i < 5; i++) {
  let userInput = prompt(`Введіть елемент №${i + 1}:`);
  originalArray.push(userInput);
}
let reversedArray = [];

while (originalArray.length > 0) {
  let poppedElement = originalArray.pop();
  reversedArray.push(poppedElement);
}

console.log("Початковий масив:", originalArray);
console.log("Масив в зворотньому напрямку:", reversedArray);

//Reverse 2
let originalArray1 = [];
while (reversedArray.length > 0) {
  let shiftedElement = reversedArray.shift();
  originalArray1.unshift(shiftedElement);
}

console.log("Початковий масив:", originalArray1);

// Copy
const copy = arr;
console.log(copy)

// Deep Copy
const deepCopy = arr.slice();
console.log(deepCopy)

//Array Equals
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

// Flat
const flats = [...exceptO[0],...exceptO[1], ...exceptO[2],...exceptO[3],...exceptO[4]];
console.log(flat);

// Destruct
let input = prompt(`Введіть щось`);
let cut = input.split("");
let firstLetter = cut[0];
let fifthLetter = cut[4];
let ninthLetter = cut[8];
alert (`${firstLetter} ${fifthLetter} ${ninthLetter}`);

//Destruct default
let [ , secondLetter = '!', , forthLetter = '!', fifthLetter1 = '!'] = cut;
alert (`${secondLetter} ${forthLetter} ${fifthLetter1}`);

//Multiply table rest
let [a, ...rest] = arr;
let [[b, ...rest2], [c, ...rest3], [d, ...rest4], [e, ...rest5], [f, ...rest6]] = rest;
let newArr = [...rest2, ...rest3, ...rest4, ...rest5, ...rest6];
console.log (newArr)

//For Alert
const names = ["John", "Paul", "George", "Ringo"]
for (const name of names) {
  alert(`${name}`)
}

//For Select Option
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (const currency of currencies){
  str += `<option value="${currency}">${currency}</option>`;
}
str+= "</select>"
document.write(str)

//For Table Vertical
let inf = "<table>";
for (const name of names) {
  inf += "<tr><td>" + name + "</td></tr>";
}
inf += "</table>";
document.write(inf);

//For Table Letters
let   tb = "<table>"
for (const currency of currencies){ 
    tb += "<tr>";
    console.log(currency)
    for (const letter of currency){ 
      tb += "<td>" + letter + "</td>";
        console.log(letter)
    }
}
tb+= "</table>"
document.write(tb)

//For Multiply Table
let   multiplyTb = "<table>"
for (const items of arr){ 
  multiplyTb += "<tr>" + items + "</tr>";
    for (const number of items){ 
      multiplyTb += "<td>" + number + "</td>";
        console.log(number)
    }
}
multiplyTb+= "</table>"
document.write(multiplyTb)

//Function Capitalize
const capitalize = str => {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(' ');
};

console.log(capitalize("cANBerRa")); 

//Map Capitalize

const upperFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const userInput = prompt("Введіть рядок:");
const wordsArray = userInput.split(' ');

const upfirstArr = wordsArray.map(word => upperFirst(word));
const resultString = upfirstArr.join(' ');

alert (`${resultString}`);

// Filter Lexics

const inputs = prompt("Введіть текст:");
const forbiddenWords = ["душніла", "red flag", "тратата"];

const separateWords = inputs.split(' ');
const validWords = separateWords.filter(word => !forbiddenWords.includes(word.toLowerCase()));

const together = validWords.join(' ');

alert (together);

//Beep Lexics

const transformedWords = separateWords.map(word => forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word);
const togetherBeep = transformedWords.join(' ');

alert (togetherBeep);

// Reduce HTML

let choice = "<select>"
choice += currencies.reduce((add, currency) => {
  return add + `<option>${currency}</option>`;
}, "");

choice += "</select>";

document.write(choice)
