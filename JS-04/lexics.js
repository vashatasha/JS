
let input = prompt("Введіть текст:");

  if (input.indexOf('душніла') >= 0  || input.indexOf('red flag') >= 0 || input.indexOf('тратата') >= 0) {
    alert("Текст містить некоректні слова.");
} else {
    alert("В тебе класний текст!");
}