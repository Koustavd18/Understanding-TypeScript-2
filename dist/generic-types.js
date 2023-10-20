"use strict";
(function () {
    console.log("Generics");
}());
const bbttnn = document.querySelector('button');
bbttnn === null || bbttnn === void 0 ? void 0 : bbttnn.addEventListener('click', () => {
    if (bbttnn.classList.contains('color')) {
        bbttnn.classList.remove('color');
        bbttnn.innerHTML = "Elvish BHAIIIIIII";
    }
    else {
        bbttnn.classList.add('color');
        bbttnn.innerHTML = "SURPRISE";
    }
});
// __________XXX- GENERICS -XXX___________
// const names: Array<object> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("arigato gosaimas, nihao, Xaonima");
//     },2000);
// });
// promise.then(data =>{
//     console.log(promise);
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObjects = merge({ name: "John Doe" }, { age: 80 });
console.log(mergedObjects.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no elements';
    if (element.length === 1) {
        descriptionText = `Got an element`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Johnny Doe' }, 'name'));
console.log('Generic classes');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Anna');
textStorage.addItem('Hanna');
console.log(textStorage.getItems());
textStorage.removeItem('Anna');
console.log(textStorage.getItems());
function createCourse(title, description, endDate) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.endDate = endDate;
    return courseGoal;
}
