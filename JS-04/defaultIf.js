let firstName = prompt("Введіть своє імʼя (в разі невведення - вам буде присвоєно імʼя Степан)");
if (firstName === null || firstName === "") {
    firstName = 'Степан';
} 
let lastName = prompt("Введіть своє прізвище (в разі невведення - вам буде присвоєна фамілія Ґіґа)");
 if (lastName === null || lastName === ""){
    lastName = 'Ґіґа';
}
let middleName = prompt("Введіть своє по-батькові (в разі невведення - вам буде присвоєно по-батькові Петрович)") 
if (middleName === null || middleName === "") {
    middleName ='Петрович';
};
alert (`${firstName} ${lastName} ${middleName}`)