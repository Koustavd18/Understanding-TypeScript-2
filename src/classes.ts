console.clear();

(function titleRender(){
    console.log("Basics of classes and interfaces");
}());

const btn = document.querySelector('.button');

if(btn){
    btn.addEventListener('click',(e) => {
        console.log(e);
    });
}

//________________XXX-CLASS-XXX___________________

const obj1 = {
    name:"Shaheb",
    age:99,
};

type User = {
    name:string;
    age:number;
};

const obj2: User = {
    name:"Laden",
    age:32,
}

abstract class Department {
    // private readonly id: string;
    // name: string;
    static currentYear = 2023;
    protected employees: string[] = [];
    constructor(private readonly id:string,public name:string){
        // this.id = id;
        // this.name = name;
    };

    static createEmployee ( name: string){
        return {name};
    }

    describe (this: Department) {
        console.log( `Department (${this.id}) : ${this.name}`);
    };

    addEmployee(employee:string){
        this.employees.push(employee);
    };

    employeeDeatils () {
        console.log(this.employees.length);
        console.log(this.employees);
    };

};


class ITDepartment extends Department {

    private lastReport: string;

    set mostRecentReport(value:string){
        if(!value){
            throw new Error ('Pass a report')
        }
        this.addReport(value);
    }

    get latestReport (){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error ("No Reports Available");
    }

    constructor(id:string, public admin:string[], public report:string[]){
        super(id,'IT');
        this.lastReport = report[0];
    }

    addReport (issue:string){
        this.report.push(issue);
        this.lastReport = issue;
    }

};

const employee1 = Department.createEmployee('AceNade');
console.log(employee1, Department.currentYear)

console.log(typeof Department);

const it = new ITDepartment('d2', ['Koustav'],[]);

it.mostRecentReport = 'Hello';
it.addReport('Dummy Report');
console.log(it.latestReport);

console.log(it.report)


console.log(it);

console.log(it.employeeDeatils())

class SDE extends Department {
    private project:string[];
    constructor(id:string, project:string[]){
        super(id,'Software Development');
        this.project = project
    }

    undergoingProjects(){
        console.log(this.project);
    }

    addEmployee(employee: string): void {
        if(employee === 'Aasish'){
            return;
        }
        this.employees.push(employee)
    }
};

const dev = new SDE("d1",['H2M']);

console.log(dev);

dev.undergoingProjects();

dev.describe();

// const bakchod = {name:"Human Resources", describe:dev.describe}

// console.log(bakchod);

// bakchod.describe();

dev.addEmployee('Koustav');
dev.addEmployee('Biplab');
dev.addEmployee('Aasish');

dev.employeeDeatils();

