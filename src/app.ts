(function(){
    console.log('Advanced Types');
}())

const bttnn = document.querySelector('.button');

if(bttnn){
    bttnn.addEventListener('click',() =>{
        if(bttnn.classList.contains('color')){
            bttnn.classList.remove('color');
            bttnn.innerHTML = "Click Again"
        } else {
            bttnn.classList.add('color');
            bttnn.innerHTML = "AYEEEIINNN"
        }
    })
}

// ______________XXX- Advanced Type -XXX__________________

// It allows us to combine other types

type Admin = {
    name:string;
    previlage: string[];
}

type Employee = {
    name:string;
    startDate: Date;
}

type Boss = Admin & Employee;

const user12: Boss = {
    name:'Koustav',
    previlage: ['SDE'],
    startDate: new Date(),
}

const user13: Employee = {
    name: 'Random Name',
    startDate: new Date(),
};

const user14: Admin = {
    name: 'Max',
    previlage: ['Coach']
}

console.log(user12);

type Combine = string | number;
type Balue = number | boolean;

type Universal = Combine & Balue;

function Addi(n1: number, n2: number) : number;
function Addi(n1:string, n2:string) : string;
function Addi(n1: Combine, n2: Combine) {
    if(typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString()
     }
    return n1 + n2;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeDetails (emp:UnknownEmployee) {
    console.log(emp.name);
    if('previlage' in emp){
        console.log(emp.previlage);
    }
    if('startDate' in emp) {
        console.log(emp.startDate);
    }
}

printEmployeeDetails(user12);

printEmployeeDetails(user13);

printEmployeeDetails(user14);


const newNumber: Universal = 2; 

interface Admin2 {
    name: string;
    previlage: string[];
}

interface Employee2 {
    name: string;
    startDate: Date;
}

interface Boss2 extends Admin2, Employee2 {

}

const user01: Boss2 = {
    name: 'AceNade',
    previlage: ['Gamer'],
    startDate: new Date(),
}

console.log(user01);

class Car {
    drive() {
        console.log("This is a car")
    }
}

class Truck {
    drive() {
        console.log('This is a truck');
    };

    load(amount:number) {
        console.log('This Truck has a load of ' + amount + ' kilos');
    };

}

type Vehicle = Car | Truck;

const v1 = new Car;

const v2 = new Truck;


function whichVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.load(1000);
    }
}

whichVehicle(v1);

whichVehicle(v2);

interface Bird{
    type: 'bird';
    flyingSpeed: number;
};

interface Horse {
    type: 'horse';
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        
    }

    console.log(animal.type.toUpperCase() +'-> Moving at a speed of ' +speed);
}

moveAnimal({type:'bird', flyingSpeed:20});

const userInputField = <HTMLInputElement>document.getElementById('input1')!;

userInputField.value = "Hi There!";

const anotherInput = document.getElementById('input2');

if(anotherInput){
    (anotherInput as HTMLInputElement).value = "Hola";
}

interface ErrorContainer {
    [prop: string] : string;
}

const errorBag: ErrorContainer = {
    email:'not valid',
    1: 'invalid',
}

const result = Addi('Koustav','Das');
console.log(result.split(''));




const fetchedComplexData = {
    id: 'u1',
    name: 'Max',
    job: {title:'CEO', description: 'My Besipany'}
}

console.log(fetchedComplexData?.job.title);

const anotherUserInput = '';

const storedData = anotherUserInput ?? 'Default';

console.log(storedData);