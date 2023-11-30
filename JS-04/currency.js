
let currency = prompt("Введіть валюту (USD або EUR):").toUpperCase();
let isBuying = confirm("Ви хочете купити?");
let rate;
if (currency === "USD") {
  rate = isBuying ? 37.3 : 36.35; 
} else if (currency === "EUR") {
  rate = isBuying ? 40.97 : 39.7;
} else {
  alert("Валюта не підтримується");
}

if (rate !== undefined) {
  let amount = +prompt("Введіть суму на обмін:");
  if (!isNaN(amount)) {
    let result = isBuying ? amount / rate : amount * rate;
    alert(`Результат обміну: ${result.toFixed(2)} ${currency}`);
  } else {
    alert("Введено некоректну суму");
  }
}
