const userName: string = "koustav";

const userLocation: string = "agartala";

let userPhoneNumber:  number = 2314312;

userPhoneNumber = 438290;

let count:number = 0;

const button = document.querySelector('button')!;

button.addEventListener('click',() => {
    console.log(`Hello ${userName} of ${userLocation}`+ count++);
});


(function (){
    console.log('ello');
}());