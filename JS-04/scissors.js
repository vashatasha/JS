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