//object literal is a key:value pair data structure
/*
We can define objects in objects also and can calls it easily.
*/
let bioData = {
    myName: "Mudasir",
    myAge: 20,
    myFunc: function () {
        console.log(`My name is ${this.myName} and my age is ${this.myAge}`);
    }
}
console.log(bioData.myAge);
console.log(bioData.myFunc());

// what is this
/*
1. "this" contain the current context
2. "this" object can have different value depending on where it is placed.
3. ""
*/
//here "this" belongs to the window object
console.log("............**this**..............");
console.log(this);

//here "this also belongs to windo object"
let myName = function() {
    console.log(this);
}
myName();



//here "this also belongs to windo object"
let name = "Mudasir"  //this name is global variable (part of window obj)
let myName2 = function () {
    console.log(this.myName2);
}
myName();



//we should not use fat arrow function with "this" keyword because it did not work properly with this keyword.
const obj = {
    friend: "Ahmad",
    myFriend :()=> {
    console.log(this)
}
}

console.log(obj.myFriend());