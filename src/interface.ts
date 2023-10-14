(function(){
    console.log('Interfaces');
}())

const btnn = document.querySelector('.button');


if(btnn){
    btnn.addEventListener('click',(e) => {
        e.preventDefault();
        if(!btnn.classList.contains("color")){
            btnn.classList.add('color');
            btnn.innerHTML = 'Color changed'
        }else{
            btnn.classList.remove('color');
            btnn.innerHTML = "Click Again"
        }
    });
};

// __________XXX-INTERFACES-XXX___________

interface Named {
    name:string;
    output?: string;
}
interface Greetable extends Named {
    greet (phrase:string) : void;
};

class Person implements Greetable{
    name:string;
    age?:number;
    constructor(n:string='' ,age?:number){
        this.name = n;
        if(age){
            this.age = age;
        }
    }

    greet(phrase:string){
        console.log(`${phrase}, ${this.name} your age is ${this.age}`)
    }
}

let user1 : Greetable;


user1 = new Person("Koustav");

user1.greet('High there?');

interface AddFn {
    (a:number,b:number): string;
};

let adda: AddFn;

adda = (n1:number, n2:number) => n1.toString() +n2.toString();

console.log(adda(2,1));