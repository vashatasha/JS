let sentence = prompt("Будь ласка, залиште ваш коментар стосовно того як вам погода (розділення рядків можливе за допомогою '\\n').")
let newLine = sentence.split('\\n').join('\n');
alert (newLine);