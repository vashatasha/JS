//Temperature
function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
        return temperature;
    }
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        return (temperature * 9/5) + 32;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        return (temperature - 32) * 5/9;
    } else {
        return null; 
    }
}

//RGB
function createCssColor(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    const cssColor = `#${hexR}${hexG}${hexB}`;
    return cssColor;
}
const red = parseInt(prompt("Введіть значення червоного кольору (0-255)"), 10);
const green = parseInt(prompt("Введіть значення зеленого кольору (0-255)"), 10);
const blue = parseInt(prompt("Введіть значення синього кольору (0-255)"), 10);

const cssColor = createCssColor(red, green, blue);
console.log(cssColor);

//Flats
function calculateApartmentLocation(allFloors, amountFlats, flatNumber) {
    let entrance = Math.floor (flatNumber / (allFloors * amountFlats))+1;
    let residual = flatNumber % (allFloors * amountFlats);
    let floor =  Math.floor (residual / amountFlats)+1;
    
    return {
        entrance,
        floor,
    };
}

const allFloors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
const amountFlats= parseInt(prompt("Введіть кількість квартир на поверсі:"));
const flatNumber = parseInt(prompt("Введіть номер квартири:")-1);

const result = calculateApartmentLocation(allFloors, amountFlats, flatNumber);
console.log(`Під'їзд: ${result.entrance}, Поверх: ${result.floor}`);

//Credentials
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const credentials = () => {
    const firstName = capitalize(prompt("Введіть ім'я").trim());
    const lastName = capitalize(prompt("Введіть прізвище").trim());
    const middleName = capitalize(prompt("Введіть по батькові").trim());
    const fullName = `${lastName} ${firstName} ${middleName}`;
    
    return {
        name: firstName,
        surname: lastName,
        fatherName: middleName,
        fullName: fullName,
    };
};
const fixedName = credentials();
console.log (fixedName);

//New line
function convertNewLine(inputString) {
    const stringWithNewLines = inputString.replace(/\\n/g, "\n");
    return stringWithNewLines;
}
const userInput = prompt("Будь ласка, залиште ваш коментар стосовно того, як вам погода (розділення рядків можливе за допомогою '\\n').");
const resultString = convertNewLine(userInput);

console.log(resultString);

//Prompt OR
const getUserInput = (promptText, defaultValue) => prompt(promptText) || defaultValue;

let age = getUserInput("How old are you or will you be this year?", "25");
let currentYear = 2023;
if (age !== null && !isNaN(age)) {
  let yearOfBirth = currentYear - age;
  alert(`You were born in ${yearOfBirth}!`);
} else {
  alert("There is some mistake, please enter a valid age.");
}

// Login And Password
function checkCredentials(correctLogin, correctPassword) {
    let enteredLogin = prompt("Enter your login:");
    let enteredPassword;
    if (enteredLogin === correctLogin) {
        enteredPassword = prompt("Enter your password:");

        if (enteredPassword === correctPassword) {
            alert("Welcome!");
            return true;
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Incorrect login. Please try again.");
    }
    return false;
}

let correctLogin = "admin";
let correctPassword = "qwerty";

let isAuthenticated = checkCredentials(correctLogin, correctPassword);
console.log(isAuthenticated);

//For Table
function createHTMLTable(arrayOfArrays) {
    let tableHTML = '<table border="1">';

    for (const row of arrayOfArrays) {
        tableHTML += '<tr>';
        for (const cell of row) {
            tableHTML += `<td>${cell}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    return tableHTML;
}

const data = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const table = createHTMLTable(data);
document.write(table);

//Filter Lexics

function filterForbiddenWords(inputString, forbiddenWords) {
    const words = inputString.split(' ');
    const filteredWords = words.filter(word => !forbiddenWords.includes(word.toLowerCase()));
    const filteredString = filteredWords.join(' ');

    return filteredString;
}

const inputString = prompt("Введіть ваш текст:");
const forbiddenWords = ['бляха', 'муха', 'пляшка', 'шабля'];

const result1 = filterForbiddenWords(inputString, forbiddenWords);
console.log(result1);

//Currency Table
function displayCurrencyTable() {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        const selectedCurrencies = ['USD', 'EUR', 'UAH', 'PLN'];
        const exchangeRates = data.rates;
        const tableData = [];
  
        tableData.push(['', ...selectedCurrencies]);
        for (const fromCurrency of selectedCurrencies) {
          const row = [fromCurrency];
          for (const toCurrency of selectedCurrencies) {
            const exchangeRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
            row.push(exchangeRate.toFixed(3));
          }
          tableData.push(row);
        }
  
        displayTable(tableData);
      })
      .catch(error => {
        console.error('Помилка отримання даних:', error);
      });
  }
  
  function displayTable(tableData) {
    let tableHtml = '<table border="1">';
    for (const row of tableData) {
      tableHtml += '<tr>';
      for (const cell of row) {
        tableHtml += `<td>${cell}</td>`;
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    document.write(tableHtml);
  }
  displayCurrencyTable();

  //Form
  function createForm(formData) {
    const form = document.createElement('form');
  
    for (const key in formData) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const lineBreak = document.createElement('br');
  
      label.textContent = `${key}: `;
      input.type = typeof formData[key] === 'boolean' ? 'checkbox' : 'text';
      input.value = formData[key];
  
      label.appendChild(input);
      form.appendChild(label);
      form.appendChild(lineBreak);
    }
  
    document.body.appendChild(form);
  }
  
  const formData = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
  };
  
  createForm(formData);

  //Divide
// Рішення у файлі index.html

//Array of objects sort
function sort(objects, field, ascending = true) {
  objects.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) {
          return ascending ? -1 : 1;
      } else if (valueA > valueB) {
          return ascending ? 1 : -1;
      } else {
          return 0;
      }
  });
}

var persons = [
  { name: "Іван", age: 17 },
  { name: "Марія", age: 35 },
  { name: "Олексій", age: 73 },
  { name: "Яків", age: 12 },
];

sort(persons, "age");
console.log("Сортування за віком за зростанням:", persons);

sort(persons, "name", false);
console.log("Сортування за ім'ям за спаданням:", persons);

//Table
function sort(data, sortBy, desc = false) {
  data.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === undefined && bValue === undefined) {
          return 0;
      } else if (aValue === undefined) {
          return desc ? 1 : -1;
      } else if (bValue === undefined) {
          return desc ? -1 : 1;
      }

      if (desc) {
          return bValue > aValue ? 1 : -1;
      } else {
          return aValue > bValue ? 1 : -1;
      }
  });
}


function sort(data, sortBy, desc = false) {
  data.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === undefined && bValue === undefined) {
          return 0;
      } else if (aValue === undefined) {
          return desc ? 1 : -1;
      } else if (bValue === undefined) {
          return desc ? -1 : 1;
      }

      if (desc) {
          return bValue > aValue ? 1 : -1;
      } else {
          return aValue > bValue ? 1 : -1;
      }
  });
}

function displayTable(data, sortBy, sortOrder) {
  const sortedData = [...data];

  sort(sortedData, sortBy, sortOrder === 'desc');

  const columns = [];
  sortedData.forEach(item => {
      Object.keys(item).forEach(key => {
          if (!columns.includes(key)) {
              columns.push(key);
          }
      });
  });

  let tableHTML = '<table border="1"><tr>';
  columns.forEach(column => {
      tableHTML += `<th>${column}</th>`;
  });
  tableHTML += '</tr>';

  sortedData.forEach(item => {
      tableHTML += '<tr>';
      columns.forEach(column => {
          const cellValue = item[column] !== undefined ? item[column] : '';
          tableHTML += `<td>${cellValue}</td>`;
      });
      tableHTML += '</tr>';
  });

  tableHTML += '</table>';

  document.body.innerHTML += tableHTML;
}

const persons = [
  { name: 'Марія', fatherName: 'Іванівна', surname: 'Іванова', sex: 'female' },
  { name: 'Миколай', fatherName: 'Іванович', surname: 'Іванов', age: 15 },
  { name: 'Петро', fatherName: 'Іванович', surname: 'Іванов', married: true },
];

displayTable(persons, 'name', 'asc');

// Calc Func

function calculate(x, y) {
  let savings = x * y * 12 / 100;
  
  let resultsObject = {
    parameter1: x,
    parameter2: y,
    result: savings,
  };

  return resultsObject;
}
let salary = prompt("What is your salary per month in dollars?");
let percentage = prompt("What percentage would you like to save?");

let conclusion = calculate(salary, percentage)
alert (`Your savings will be ${conclusion.result}$ per one year!`);

//Calc Live 
// Рішення у файлі index.html


