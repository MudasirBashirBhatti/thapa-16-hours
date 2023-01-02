//......................**Array Destructuring**....................//
console.log("..........**Array Destructuring**...............");
//array destructuring is a method by using which we can easily get the particular element with array
let myArr = ["Mudasir", "Bashir", 20];
let [myFname, myLname, age] = myArr;
console.log(myLname);
console.log(age);
console.log(myFname);


console.log("................**add values in array using destrucing.....");
let [fname, lname, myage, degree = "CS"] = myArr;
console.log(degree);
