let a = 10
{
    let b = 20
    {
        let c = 30
        //a=10, b=20, c=30, d=is not defined
        
        b++
        a *= 10
    }
    {
        let c = 50
        //a=100, b=21, c=50, d=is not defined
        b += 500
    }
    {
        const a = 100500
        const d = "value"
        //a=100500, b=521,d = "value", c=is not defined
        {
            let a = -50
            b     = 1000
            //a= -50, b=1000, d = "value", c=is not defined
        }
        //a=100500, b=1000, d = "value", c=is not defined
    }
    //a=100, b=1000, c=is not defined, d=is not defined
}
//a=100, b=is not defined, c=is not defined, d=is not defined

//Comparison if
var age = +prompt("Скільки вам років?", "");

if (age <= 0) {
    alert("Ви ще не народились, мабуть :)");
} else if (age < 18) {
    alert("школяр");
} else if (age < 30) {
    alert("молодь");
} else if (age < 45) {
    alert("зрілість");
} else if (age < 60) {
    alert("захід сонця");
} else if (age >= 60) {
    alert("як пенсія?");
} else {
    alert("чи кіборг, чи KERNESS");
}

//switch: if
let color = prompt("Введіть колір","");
if (color==="red" || color==="black") {
    document.write("<div style='background-color: black; color: white;'>чорний</div>")
}
else if (color==="blue" || color==="green"){
    document.write("<div style='background-color: green;'>зелений</div>")
}
else { 
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}

//switch: sizes
let size = + prompt("Введіть ваш розмір верхнього одягу:") || alert ("Розмір невведено");
switch(size) {
    case 40:
    alert ("Цей розмір відповідає американському розміру S")
    break;

    case 42:
    case 44:
    alert ("Цей розмір відповідає американському розміру M")
    break;

    case 46:
    case 48:
    alert ("Цей розмір відповідає американському розміру L")
    break;

    case 50:
    case 52:
    alert ("Цей розмір відповідає американському розміру XL")
    break;

    case 54:
    alert ("Цей розмір відповідає американському розміру XXL")
    break;

    default:
    alert ("Вибачте, даний розмір непредставлено у нас в магазині")
    break;
}

//noswitch
const noSwitch = (key, cases, defaultKey = 'default') => {
    if (key in cases) {
        cases[key]();
    } else {
        cases[defaultKey]();
    }
}

const drink = prompt("Що ви любите пити");

noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай: () => console.log('Смачна та корисна штука. Не перестарайтеся з цукром'),
    пиво: () => console.log('Добре влітку, та в міру'),
    віскі: () => console.log('Та ви, батечку, естет! Не забудьте лід і сигару'),
    default: () => console.log('Щось я не зрозумів')
});

//closure calc
fetch('https://open.er-api.com/v6/latest/USD')
  .then(res => res.json())
  .then(data => {
    const exchangeRates = data.rates;
    const buttonsContainer = document.createElement('div');
    document.body.appendChild(buttonsContainer);

    for (const currency in exchangeRates) {
      const button = document.createElement('button');
      button.innerText = currency;
      button.onclick = () => {
        const amount = parseFloat(prompt(`Введіть суму в ${currency}`));

        if (!isNaN(amount)) {
          const usdAmount = amount / exchangeRates[currency];
          alert(`${amount} ${currency} = ${usdAmount.toFixed(2)} USD`);
        } else {
          alert('Будь ласка, введіть коректну суму.');
        }
      };

      buttonsContainer.appendChild(button);
    }
  })
  .catch(error => {
    console.error('Помилка отримання даних:', error);
  });

  // два останны завдання в index.html