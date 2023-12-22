//Literals
const dog = {
    name: 'Teya',
    color: 'white',
    shape: 'thin',
    eyes_color: 'gray',
    [prompt("Введіть характерну рису")]: prompt('Введіть опис цієї риси'),
}
const room = {
    type: 'Living room',
    wall_color: 'white',
    ceiling_height: '5m',
    windows_amount: '2',   
    //Literals expand
    [prompt("Введіть назву додаткових деталей")]: prompt('Введіть опис цих деталей')
}

// Literals copy
const newKey = prompt("Введіть назву нової характерної риси:");
const newValue = prompt("Введіть значення для нової риси:");
dog[newKey] = newValue;
const pappy = { ...dog };

//Html tree
var htmlTree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ['Enter a data please:']
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: "name",
                    },
                    
                },
                {
                    tagName: "input",
                    attrs: {
                        type: 'text',
                        id: "surname",
                    },
                },
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: "button",
                    attrs: {
                        id: "ok",

                    },
                    children: ["Ok"],

                },
                {
                    tagName: "button",
                    attrs: {
                        id: "cancel",
                    },
                    children: ["Cancel"],
                },
            ]
        }
    ]
}

console.log(htmlTree.children[0].children[1].tagName);
console.log(htmlTree.children[0].children[2].attrs.id);

htmlTree.children[0].parent = htmlTree;
htmlTree.children[1].parent = htmlTree;
htmlTree.children[0].children[0].parent = htmlTree.children[0];
htmlTree.children[0].children[1].parent = htmlTree.children[0];
htmlTree.children[0].children[2].parent = htmlTree.children[0];
htmlTree.children[1].children[0].parent = htmlTree.children[1];
htmlTree.children[1].children[1].parent = htmlTree.children[1];

//Change OK
htmlTree.children[1].children[1].attrs[prompt("Введіть назву атрибута")] = prompt('Введіть значення атрибута');

//Destructure
const [{ children: [spanText] }, , ] = htmlTree.children[0].children;
const [, { children: [secondButtonText] }] = htmlTree.children[1].children;
const [, , { attrs: { id: secondInputId } }] = htmlTree.children[0].children;

console.log("Значення тексту у тезі span:", spanText);
console.log("Значення тексту в другій кнопці:", secondButtonText);
console.log("Значення атрибуту id у другому input:", secondInputId);

//Destruct array
let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
let [even1, odd1, even2, odd2, even3, ...letters] = arr;
console.log("Непарні числа:", even1, even2, even3);
console.log("Парні числа:", odd1, odd2, odd3);
console.log("Букви:", letters);

//Destruct string
let double = [1, "abc"];
let [number, [s1, s2, s3]] = double;

console.log("Число:", number);
console.log("Літера a:", s1);
console.log("Літера b:", s2);
console.log("Літера c:", s3);

//Destruct 2
let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}
           
           
let { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log("Ім'я першої дитини:", name1);
console.log("Ім'я другої дитини:", name2);

//Destruct 3
let arr1 = [1,2,3,4, 5,6,7,10]
const {0: a, 1:b, length} = arr1;
console.log("a:", a);
console.log("b:", b);
console.log("Length:",length);

//Copy delete
const {name, ...rest} = dog;
let doggo = { name: prompt('Введіть імʼя вашого цуценя'), ...rest}

//Currency real rate
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
    const rates = data.rates;
    const inputCurrency = prompt('Введіть вхідну валюту (наприклад, USD):').toUpperCase();
    const outputCurrency = prompt('Введіть валюту, в яку відбувається конвертація (наприклад, EUR):').toUpperCase();
    const amount = parseFloat(prompt('Введіть суму у вхідній валюті:'));

    if (!rates[inputCurrency] || !rates[outputCurrency]) {
      alert('Неправильно введені валюти.');
      return;
    }

    const convertedAmount = (amount / rates[inputCurrency]) * rates[outputCurrency];

    alert(`Результат конвертації: ${convertedAmount.toFixed(2)} ${outputCurrency}`);
  })
  .catch(error => {
    console.error('Помилка отримання даних:', error);
  });

  //Currency drop down
  fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
    const rates = data.rates;
    let selectHtml = '<select>';

    for (const currency in rates) {
      selectHtml += `<option value="${currency}">${currency}</option>`;
    }

    selectHtml += '</select>';
    document.write(selectHtml);
  })
  .catch(error => {
    console.error('Помилка отримання даних:', error);
  });


  //Currency table
  fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const selectedCurrencies = ['USD', 'EUR', 'UAH', 'PLN'];
    const exchangeRates = data.rates;
    let tableHtml = '<table border="1"><tr><td></td>';
    for (const currency of selectedCurrencies) {
      tableHtml += `<td>${currency}</td>`;
    }
    tableHtml += '</tr>';
    for (const fromCurrency of selectedCurrencies) {
      tableHtml += `<tr><td>${fromCurrency}</td>`;
      for (const toCurrency of selectedCurrencies) {
        const exchangeRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
        tableHtml += `<td>${exchangeRate.toFixed(3)}</td>`;
      }
      tableHtml += '</tr>';
    }

    tableHtml += '</table>';
    document.write(tableHtml);
  })
  .catch(error => {
    console.error('Помилка отримання даних:', error);
  });


  //Form
  const car = {
    "Name":"chevrolet chevelle malibu",
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Origin":"USA",
    "in_production": false
}
  function createForm(object) {
    const form = document.createElement('form');
  
    for (const key in object) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const lineBreak = document.createElement('br');
  
      label.textContent = `${key}: `;
      input.type = typeof object[key] === 'boolean' ? 'checkbox' : typeof object[key] === 'number' ? 'number' : 'text';
      input.value = object[key];
  
      label.appendChild(input);
      form.appendChild(label);
      form.appendChild(lineBreak);

    }
  
    return form;
  }
  
  const formElement = createForm(car);
  document.body.appendChild(formElement);

  //Table
  const columns = [];
  persons.forEach(person => {
      Object.keys(person).forEach(key => {
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
  
  persons.forEach(person => {
      tableHTML += '<tr>';
      columns.forEach(column => {
        const cellValue = person[column] !== undefined ? person[column] : '';
        tableHTML += `<td>${cellValue}</td>`;
    });
    tableHTML += '</tr>';
  });
  
  tableHTML += '</table>';
  
  document.body.innerHTML += tableHTML;