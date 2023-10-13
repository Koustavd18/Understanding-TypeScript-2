"use strict";
(function () {
    console.log('Interfaces');
}());
const btnn = document.querySelector('.button');
if (btnn) {
    btnn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!btnn.classList.contains("color")) {
            btnn.classList.add('color');
            btnn.innerHTML = 'Color changed';
        }
        else {
            btnn.classList.remove('color');
            btnn.innerHTML = "Click Again";
        }
    });
}
;
;
class Person {
    constructor(n = '', age) {
        this.name = n;
        if (age) {
            this.age = age;
        }
    }
    greet(phrase) {
        console.log(`${phrase}, ${this.name} your age is ${this.age}`);
    }
}
let user1;
user1 = new Person("Koustav");
user1.greet('High there?');
;
let adda;
adda = (n1, n2) => n1.toString() + n2.toString();
console.log(adda(2, 1));
