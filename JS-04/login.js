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