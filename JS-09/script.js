//while confirm
let i = 0
while (!confirm('Підтвердіть, пліз')) {
     alert('Ще спроба')
     i++
}
//array fill
let userArray = [];

while (true) {
    let userInput = prompt('Введіть елемент (або натисніть "Скасувати" для завершення):');

    if (userInput === null) {
        break; 
    }
    userArray.push(userInput);
}
console.log('Отриманий масив:', userArray);

//array fill nopush
let userArr = [];
let index = 0;

while (true) {
    let input = prompt('Введіть елемент (або натисніть "Скасувати" для завершення):');

    if (input === null) {
        break;
    }
    userArr[index] = input;
    index++;
}
console.log('Отриманий масив:', userArr);

//infinite probability
let iterations = 0;

while (true) {
    iterations++;

    if (Math.random() > 0.9) {
        break;
    }
}
alert(`Кількість ітерацій: ${iterations}`);

//empty loop
while (true) {
    const userInput = prompt('Натисніть OK або Скасувати');

    if (userInput !== null) {
        break;
    }
}
//progression sum
const userInput = +prompt("Введіть значення N для арифметичної прогресії з кроком 3:");
const n = parseInt(userInput);

if (!isNaN(n)) {
    let sum = 1;

    for (let i = 1; i <= n; i += 1) {
        sum += 3;
    }

    alert(`Сума арифметичної прогресії від 1 до ${n} з кроком 3: ${sum}`);
} else {
    alert("Будь ласка, введіть число.");
}

//chess one line
const length = +prompt('Введіть довжину рядка:');

if (!isNaN(length) && length !== null) {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += '# ';
    }
    console.log(result);
} else {
    console.log('Будь ласка, введіть числове значення для довжини рядка.');
}

//numbers
const rows = 10;
const cols = 10;
let result = '';

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        result += j;
    }

    result += '\n';
}
console.log(result);

//chess
const row = 9;
const col = 7;
let board = '';

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        board += (i + j) % 2 === 0 ? '.' : '#';
    }
    board += '\n';
}

console.log(board);

//cubes
let x;

do {
    const userInput = prompt('Введіть кількість елементів у масиві:');

    if (!isNaN(userInput)) {
        x = Number(userInput);
        break;
    } else {
        alert('Будь ласка, введіть числове значення.');
    }
} while (true);

const cubes = [];


for (let i = 0; i < x; i++) {
    cubes.push(Math.pow(i, 3));
}
console.log(cubes);

//multiply table
const arr = [];
for (let i = 0; i <= 9; i++) {
  arr[i] = [];
  for (let j = 0; j <= 9; j++) {
    arr[i][j] = (i) * (j);
  }
}
console.log(arr);
console.log (arr [5] [6]);

//read array of objects
function readArrayOfObjects() {
    const arrayOfObjects = [];

    while (true) {
        const object = {};
        let continueEntering = true;

        while (continueEntering) {
            const key = prompt('Введіть ключ:');
            
            if (key === null) {
                continueEntering = false;
                break;
            }

            const value = prompt(`Введіть значення для ключа "${key}":`);
            
            if (value === null) {
                continueEntering = false;
                break;
            }
            object[key] = value;
        }

        arrayOfObjects.push(object);

        if (!confirm('Бажаєте ввести ще один об\'єкт?')) {
            break;
        }
    }

    return arrayOfObjects;
}

const obj = readArrayOfObjects();
console.log(obj);

//
function generateRhombus (size) {
    if (size % 2 === 0) {
        size++;
    }

    const middle = Math.floor(size / 2);

    let rhombus = '';

    for (let i = 0; i < size; i++) {
        const spaces = Math.abs(middle - i);
        const hashes = size - 2 * spaces;

        rhombus += '.'.repeat(spaces) + '#'.repeat(hashes) + '.'.repeat(spaces) + '\n';
    }

    return rhombus;
}

const size = prompt('Введіть ширину та висоту ромба:');
if (!isNaN(size) && size > 0) {
    const result = generateRhombus(Number(size));
    console.log(result);
} else {
    console.log('Будь ласка, введіть коректне число для ширини та висоти ромба.');
}

//DOM: multiply table && DOM: highlight cell
const table = document.createElement('table');
document.body.appendChild(table);

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.innerText = `${i * j}`;
        row.appendChild(cell);
        cell.addEventListener('mouseover', () => highlightCell(cell));
        cell.addEventListener('mouseout', () => unhighlightCell(cell));
    }

    table.appendChild(row);
}
function highlightCell(cell) {
    cell.style.backgroundColor = 'yellow';
}

function unhighlightCell(cell) {
    cell.style.backgroundColor = '';
}

//DOM: Highlight cross
const tab = document.createElement('table');
document.body.appendChild(tab);

let highlightedRow = null;
let highlightedColumn = null;

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.innerText = `${i * j}`;
        row.appendChild(cell);

        cell.addEventListener('mouseover', () => highlightCell(cell, i, j));
        cell.addEventListener('mouseout', () => unhighlightCell());
    }

    tab.appendChild(row);
}

function highlightCell(cell, row, column) {
    cell.style.backgroundColor = 'yellow';

    if (highlightedRow) {
        highlightedRow.style.backgroundColor = '';
    }
    highlightedRow = cell.parentNode;
    highlightedRow.style.backgroundColor = 'lightgreen';

    if (highlightedColumn) {
        for (let i = 0; i < tab.rows.length; i++) {
            tab.rows[i].cells[column - 1].style.backgroundColor = '';
        }
    }
    highlightedColumn = column;
    for (let i = 0; i < tab.rows.length; i++) {
        tab.rows[i].cells[column - 1].style.backgroundColor = 'lightgreen';
    }
}

function unhighlightCell() {
    if (highlightedRow) {
        highlightedRow.style.backgroundColor = '';
        highlightedRow = null;
    }

    if (highlightedColumn) {
        for (let i = 0; i < tab.rows.length; i++) {
            tab.rows[i].cells[highlightedColumn - 1].style.backgroundColor = '';
        }
        highlightedColumn = null;
    }
}
