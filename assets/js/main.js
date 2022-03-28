/* 
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

const numberElement = document.querySelector(".numbers");

for (let i=1; i<=100; i++){
    let number;
    console.log(i);

    if (i % 3 && i % 5 == 0) {
       number = `<div class="fizzbuzz">FizzBuzz</div>`
    } else if (i % 3 == 0) {
       number = `<div class="fizz">Fizz</div>`

    } else if (i % 5 == 0) {
       number = `<div class="buzz">Buzz</div>`

    } else {
       number = `<div>${i}</div>`
       console.log(number);
    }
}

