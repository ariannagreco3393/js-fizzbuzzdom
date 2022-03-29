/* 
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

const numbersElement = document.querySelector(".numbers");

for (let i=1; i<=100; i++){
    let number;
    //console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
       number = `<div class="number fizzbuzz bg-danger d-flex flex-wrap justify-content-center align-items-center">fizzbuzz</div>`
    } else if (i % 3 == 0) {
       number = `<div class="number fizz bg-light d-flex flex-wrap justify-content-center align-items-center">fizz </div>`

    } else if (i % 5 == 0) {
       number = `<div class="number buzz bg-warning d-flex flex-wrap justify-content-center align-items-center">buzz</div>`

    } else {
       number = `<div class="number bg-success d-flex flex-wrap justify-content-center align-items-center">${i}</div>`
       //console.log(number);
    }

    numbersElement.insertAdjacentHTML("beforeend", number)

}
