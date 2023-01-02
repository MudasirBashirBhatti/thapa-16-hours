// .....................functions.........................
// 1. simple function
function myFunc() {
    var a = 5;
    var b = 6;
    var c = a + b;
    console.log(c);
}
console.log("simple function a+b run");
myFunc();


// 2. function with parameters (method1)
let myFunc2 = function(a, b) {
    let myVar = a + b;
    console.log(myVar);
}
console.log("method1 function with para");
myFunc2(2, 4);



// 3. function with parameters (method2)
let myFunc3 = function(a, b) {
    let myVar = a * b;
    console.log(myVar);
}
console.log("method2 function with para");
var func3 = myFunc3(2, 4);


//4. what is return in a function 
let returnFunc = function (a, b) {
    return a / b;
}
let funcExp = returnFunc(3,2)
console.log("result of a/b in return function is = " + funcExp);



//5. anonymous functon experation:
let anoFunc = function (a, b) {
    return a ** b;
}
console.log("anonymous function runs");
console.log(anoFunc(3, 2));


/*
6. Default parameters
We use default parameters if we not wanted to show any one NaN for forgatting a number as an argument.
e.g. If we pass two parameters in a function like myFunc(a,b) and someone put only one number like myFunc(3) then it will return a NaN.
*/

function defaultPara(x, y=1) {
    return x*y
}
//here y=1 is default parameter
console.log(defaultPara(3));



/*
7. Arrow Function
fat arrow function can run without curly braces
*/
let fatArro = () => {
    let myName = "Fat Arrow Function"
    console.log(myName);
}
fatArro();