"use strict";
console.clear();
(function titleRender() {
    console.log("Basics of classes and interfaces");
}());
const btn = document.querySelector('.button');
if (btn) {
    btn.addEventListener('click', (e) => {
        console.log(e);
    });
}
//________________XXX-CLASS-XXX___________________
const obj1 = {
    name: "Shaheb",
    age: 99,
};
const obj2 = {
    name: "Laden",
    age: 32,
};
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    ;
    static createEmployee(name) {
        return { name };
    }
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
    ;
    addEmployee(employee) {
        this.employees.push(employee);
    }
    ;
    employeeDeatils() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    ;
}
// private readonly id: string;
// name: string;
Department.currentYear = 2023;
;
class ITDepartment extends Department {
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Pass a report');
        }
        this.addReport(value);
    }
    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Reports Available");
    }
    constructor(id, admin, report) {
        super(id, 'IT');
        this.admin = admin;
        this.report = report;
        this.lastReport = report[0];
    }
    addReport(issue) {
        this.report.push(issue);
        this.lastReport = issue;
    }
}
;
const employee1 = Department.createEmployee('AceNade');
console.log(employee1, Department.currentYear);
console.log(typeof Department);
const it = new ITDepartment('d2', ['Koustav'], []);
it.mostRecentReport = 'Hello';
it.addReport('Dummy Report');
console.log(it.latestReport);
console.log(it.report);
console.log(it);
console.log(it.employeeDeatils());
class SDE extends Department {
    constructor(id, project) {
        super(id, 'Software Development');
        this.project = project;
    }
    undergoingProjects() {
        console.log(this.project);
    }
    addEmployee(employee) {
        if (employee === 'Aasish') {
            return;
        }
        this.employees.push(employee);
    }
}
;
const dev = new SDE("d1", ['H2M']);
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
