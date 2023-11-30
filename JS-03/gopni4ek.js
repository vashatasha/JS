let sentence = prompt("Будь ласка, залиште ваш коментар стосовно того як вам погода (він має містити мінімум одну кому).")
let gopar = sentence.split(',').join(", блін,");
alert (gopar);