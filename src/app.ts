const userName: string = "koustav";

const userLocation: string = "agartala";

let userPhoneNumber:  number = 2314312;

userPhoneNumber = 438290;

let count:number = 0;



const button = document.querySelector('button')!;

button.addEventListener('click',event => {
    event.preventDefault();
    console.log(`Hello ${userName} of ${userLocation}`+ count++);
    console.log(event.screenX, event.screenY);
});


console.log("Hello Virtual World Welcome to real world");

(function (){
    console.log('ello');
}());

//let and const

let age:number = 30;

age = 26;

let age2:number=0;

function add(a:number, b:number):number {
     age2 = a+b;
    return age2;
}
add(20,10);

if(age2>20){
    age = 29;
}

console.log(age);

console.log(age2);

//arrow function

const adding = (a:number, b:number = 8) => a+b;

const printOutput: (a: number|string) => void = output => console.log(output);

printOutput(adding(2));

const bottam = document.querySelector('button');

if(bottam){
    bottam.addEventListener('click', event => console.log(event));
}

//spread operator

const hobbies = ['music','cooking', 'dancing', 'biking'];

const activeHobbies  = ['hiking'];

console.log(activeHobbies);

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    name:'John Doe',
    age:69
}

const samePerson = {
    hobbies:'dancing',
    ...person,
}

console.log(samePerson);

// Rest Parameters

const addingRest = ( ...numbers: number[] ) => {
    return numbers.reduce((acc,cur)=> acc+cur,0);
};

const addedNumbers = addingRest(1,54,123,56,6.9);

console.log(addedNumbers);

//Destructuring

const [hobby1,hobby2,...remainingHobby] = hobbies;

console.log(hobbies);
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobby);

const manush = {
    manushName:'Maximillan',
    manushAge:30,
}

const { manushName: firstName, manushAge } = manush;

console.log(firstName, manushAge, manush);

