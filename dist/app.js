"use strict";
const userName = "koustav";
const userLocation = "agartala";
let userPhoneNumber = 2314312;
userPhoneNumber = 438290;
let count = 0;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log(`Hello ${userName} of ${userLocation}` + count++);
});
(function () {
    console.log('ello');
}());
