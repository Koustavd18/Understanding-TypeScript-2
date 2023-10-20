(function (){
    console.log("Generics")
}())

const bbttnn = document.querySelector('button');

bbttnn?.addEventListener('click', ()=> {
    if(bbttnn.classList.contains('color')){
        bbttnn.classList.remove('color');
        bbttnn.innerHTML = "Elvish BHAIIIIIII"
    } else {
        bbttnn.classList.add('color');
        bbttnn.innerHTML = "SURPRISE";
    }
})


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


function merge<T extends object, U extends object> (objA: T, objB: U) {
return Object.assign(objA, objB);
}

const mergedObjects = merge({name:"John Doe"},{age:80});
console.log(mergedObjects.name);

interface Lengthy {
    length: number;
}

function countAndDescribe< T extends Lengthy > (element:T) : [T, string]{
    let descriptionText = 'Got no elements';
    if(element.length === 1){
        descriptionText = `Got an element`
    } else if(element.length  > 1){
        descriptionText  = `Got ${element.length} elements`
    }
    return [element , descriptionText];
}

console.log(countAndDescribe('Hi there'));

function extractAndConvert< T extends object, U extends keyof T> (obj:T, key:U) {
    return obj[key];
}

console.log(extractAndConvert({name: 'Johnny Doe'}, 'name'));

console.log('Generic classes');

class DataStorage < T extends string | number | boolean >{ 

    private data : T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage< string > ();

textStorage.addItem('Max');
textStorage.addItem('Anna');
textStorage.addItem('Hanna');
console.log(textStorage.getItems());
textStorage.removeItem('Anna');
console.log(textStorage.getItems());


interface CourseGoal {
    title: string;
    description: string;
    endDate: Date
}

function createCourse ( title: string, description: string, endDate: Date) : CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.endDate = endDate;
    return courseGoal as CourseGoal;
}