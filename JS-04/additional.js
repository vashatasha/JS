let taskName = prompt("Введіть назву завдання: \n- камінь-ножиці-папір \n- булінь \n- шопінг \n- обмін валют \n- піб \n- цензура \n- логін \n- парність числа \n- рік народження \n- тернарка \n- конвертер розміру").toLowerCase();

if (taskName === "камінь-ножиці-папір") {
  
    let choice = prompt ("Камінь, ножиці чи папір?").toLowerCase();
    let random = Math.random()
    let proc
    if (random < 0.34) {
        proc = "камінь"
    }
    if (random >= 0.34 &&  random < 0.67) {
        proc = "ножиці"
    }
    if (random >= 0.67 &&  random < 1) {
        proc = "папір"
    }
    alert(`Комп'ютер вибрав: ${proc}`);
    
    let result;
    if (choice === proc) {
      result = "Нічия!";
    } else if (
      (choice === "камінь" && proc === "ножиці") ||
      (choice === "ножиці" && proc=== "папір") ||
      (choice === "папір" && proc === "камінь")
    ) {
      result = "Ви перемогли!";
    } else {
      result = "Комп'ютер переміг!";
    }
    
    alert(result);
} else if (taskName === "булінь") {
    let sex = confirm("Ви чоловічої статі?");

    if  (sex) {
        alert("Ви чоловік")
      } else {
      alert("Введіть парне число чи ні.");
    }
    let nationality = confirm("Ви українець?");
    
    if  (nationality) {
        alert("Слава Україні!")
      } else {
      alert("Stay with Ukraine");
    }
    let languageLevel = confirm("Do you have advanced level of English?");
    
    if  (languageLevel) {
        alert("Nice to hear that! We hope that you`ll cope with the next text")
      } else {
      alert("No worries, we have something simple for you)");
    }
} else if (taskName === "шопінг") {
    let propose = confirm("Ти любиш обирати, а потім дарувати подаруночки?");
    if (propose) {
        alert("Шопінг?")
     }
    else {
        alert("Ну ти і бяка!")
    };
} else if (taskName === "обмін валют") {
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

} else if (taskName === "піб") {
    let firstName = prompt("Введіть своє імʼя (в разі невведення - вам буде присвоєно імʼя Степан)") ||  'Степан';
    let lastName = prompt("Введіть своє прізвище (в разі невведення - вам буде присвоєна фамілія Ґіґа)") ||  'Ґіґа';
    let middleName = prompt("Введіть своє по-батькові (в разі невведення - вам буде присвоєно по-батькові Петрович)") ||  'Петрович';
    alert (`${firstName} ${lastName} ${middleName}`)

} else if (taskName === "цензура") {
    let input = prompt("Введіть текст:");

    if (input.indexOf('душніла') >= 0  || input.indexOf('red flag') >= 0 || input.indexOf('тратата') >= 0) {
      alert("Текст містить некоректні слова.");
  } else {
      alert("В тебе класний текст!");
  }
} else if (taskName === "логін") {
    let login = prompt("Введіть логін:");
    if (login === "admin") {
      let password = prompt("Введіть пароль:");
      if (password === "qwerty") {
        alert("Welcome, admin!");
      } else {
        alert("Невірний пароль!");
      }
    } else {
      alert("Невірний логін!");
    }
} else if (taskName === "парність числа") {
    let num = prompt("Введіть число:");

if (!isNaN(num)) {
  if (num % 2 === 0) {
    alert("Введене число є парним.");
  } else {
    alert("Введене число є непарним.");
  }
} else {
  alert("Введіть парне число чи ні.");
}

} else if (taskName === "рік народження") {
    let age = prompt("How old are you or will you be this year?") || alert("There is some mistake, try to enter again.");
let current_year = 2023

let year_Birth = current_year - age;
alert (`You was born in ${year_Birth}!`);
} else if (taskName === "конвертер розміру") {
    let size = prompt("Введіть ваш розмір верхнього одягу:") || alert ("Розмір невведено");
    if (size >= 40 && size < 42) {
        alert ("Цей розмір відповідає американському розміру S");
    }
    if (size >= 42 && size < 46) {
        alert ("Цей розмір відповідає американському розміру M");
    }
    if (size >= 46 && size < 50) {
        alert ("Цей розмір відповідає американському розміру L");
    }
    if (size >= 50 && size < 54) {
        alert ("Цей розмір відповідає американському розміру XL");
    }
    if (size == 54) {
        alert ("Цей розмір відповідає американському розміру XXL");
    }
    if (size > 54) {
        alert ("Вибачте, даний розмір непредставлено у нас в магазині");
    }

} else if (taskName === "тернарка") {
    let sex = confirm("Are you a man?") ? alert ("You are a man") : alert ("You are a woman");
}else {
  alert("Завдання з введеною назвою не знайдено.");
}