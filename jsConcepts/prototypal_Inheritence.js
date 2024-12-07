// in java script everything is an object

let p1 = {
    fname: 'Mudasir',
    lname: 'Bashir',
};

console.log(p1);

let p2 = Object.create(p1)

// every method (index,indexOf etc.) is present in the __proto__ of the class 
console.log(p2.fname.__proto__); //this line points to string in proto


// example of prototypal inheritance
let x1 = {
    xy1: 'this is x1'
}
let x2 = {
    xy2: 'this is x2',
    __proto__: x1
}
let x3 = {
    xy3: 'this is x3',
    __proto__: x2
}

console.log('this is x1', x1);
console.log('this is x2', x2); //to analyse expand proto
console.log('this is x3', x3); //to analyse expand proto
console.log('x3', x3.xy1);

//in above example where i console x3.xy1 it will first try to find xy1 in x3 if not find in x3 it will move to __proto__. here __proto__ is pointing to x2 so it will move to x2 object and try to find xy1. in x2 object it is not present so it will try to find it in __proto__. here in x2 __proto__ pointing to x1 object so it will move to x1 object and try to find here and here it is find so we will get value.
// java script run until __proto__ ends at null object.

let x = 10
console.log('x is ', x);
console.log('proto of x', x.__proto__);
console.log('proto of x.__proto__', x.__proto__.__proto__);

// NOTE: As a developer we should not try to modify __proto__ although we can do it but we should avoid it because it sometimes cause of bugs.

// ...........
class Student {
    constructor() {
        this.myName = "I'm Mudasir Bashir"
    }
    getName() {
        return "I'm inside get name"
    }
}

let s1 = new Student()
let s2 = { __proto__: Student.prototype }
console.log('s1', s1.myName);
console.log('s2', s2.getName());

// this is how inheritance work
// on base classes there is prototype. while on object __proto__ is referenced. object proto points towards the prototype
//__proto__ is the actual object that is used in the lookup chain to resolve methods etc.
//prototype is the object that is used to build __proto__ when you create an object with new