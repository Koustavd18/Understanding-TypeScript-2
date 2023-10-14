"use strict";
(function () {
    console.log('Advanced Types');
}());
const bttnn = document.querySelector('.button');
if (bttnn) {
    bttnn.addEventListener('click', () => {
        if (bttnn.classList.contains('color')) {
            bttnn.classList.remove('color');
            bttnn.innerHTML = "Click Again";
        }
        else {
            bttnn.classList.add('color');
            bttnn.innerHTML = "AYEEEIINNN";
        }
    });
}
const user12 = {
    name: 'Koustav',
    previlage: ['SDE'],
    startDate: new Date(),
};
const user13 = {
    name: 'Random Name',
    startDate: new Date(),
};
const user14 = {
    name: 'Max',
    previlage: ['Coach']
};
console.log(user12);
function Addi(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeDetails(emp) {
    console.log(emp.name);
    if ('previlage' in emp) {
        console.log(emp.previlage);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeDetails(user12);
printEmployeeDetails(user13);
printEmployeeDetails(user14);
const newNumber = 2;
const user01 = {
    name: 'AceNade',
    previlage: ['Gamer'],
    startDate: new Date(),
};
console.log(user01);
class Car {
    drive() {
        console.log("This is a car");
    }
}
class Truck {
    drive() {
        console.log('This is a truck');
    }
    ;
    load(amount) {
        console.log('This Truck has a load of ' + amount + ' kilos');
    }
    ;
}
const v1 = new Car;
const v2 = new Truck;
function whichVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.load(1000);
    }
}
whichVehicle(v1);
whichVehicle(v2);
;
;
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(animal.type.toUpperCase() + '-> Moving at a speed of ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 20 });
const userInputField = document.getElementById('input1');
userInputField.value = "Hi There!";
const anotherInput = document.getElementById('input2');
if (anotherInput) {
    anotherInput.value = "Hola";
}
const errorBag = {
    email: 'not valid',
    1: 'invalid',
};
const result = Addi('Koustav', 'Das');
console.log(result.split(''));
const fetchedComplexData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My Besipany' }
};
console.log(fetchedComplexData === null || fetchedComplexData === void 0 ? void 0 : fetchedComplexData.job.title);
const anotherUserInput = '';
const storedData = anotherUserInput !== null && anotherUserInput !== void 0 ? anotherUserInput : 'Default';
console.log(storedData);
