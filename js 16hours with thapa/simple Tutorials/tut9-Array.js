//we can store multiple datatypes in array
var mulTypes = ["Ahmad", 22, "Male", true]
//we use array if our need is to add multiple values in one variable.
var myFriends = ["Ahmad", "Hassan", "Zubair","Adnan","Arslan","Abdullah"]


//in array 0 index element is called lower index/lower boundry and nth index element is called upper index / upper boundery.

// .........................traversal in an array ......................//
/*
navigate through an array

*/
// it will print 0 index element 
console.log(".........****0 index elements****..........");
console.log(myFriends[0] + "this is on 0 index");

// it will print 2 index element 
console.log(".........****2 index element****..........");
console.log(myFriends[2] + "this is on 2 index");






//.................find length of any array..........................//
// how to find the length of an array 
console.log(".........****lenght of an array****..........");
console.log(`${myFriends.length} This is the length of an Array`);






//.......................for loop in arrays .........................//

//for loop to iterate through the elements of an array
console.log(".........****for loop in array****..........");
console.log("for loop to to iterate through array");
for (i = 0; i < myFriends.length; i++){
    console.log(myFriends[i]);
}





//......................for in loop in array..........................//

//for in loop to iterate through the element of an array so that we can get the index numbers of elements. basically it returns index numbers of arry elements.
//we can replace "e" with any alphabet.
console.log(".........****for in loop****..........");
console.log("for in loop to to iterate through array");
for (let e in myFriends) {
    console.log(e);
}






// ..........................for of loop in arrays....................//
/*
for of loop returns the element of an arry.
*/
console.log(".........****for of loop****..........");
console.log("for of loop starts");
for (e of myFriends) {
    console.log(e);
}








//................for each loop in arrays.................//
/*
it loops through individual elements of an array , index number of an individual element and the current array we deal with. We can not use break like in switch case statement.
for each method gives us three types of data of an array e.g. 
1.element 2.index 3.current array

*/
//for each method using fat arrow function
console.log(".........*******for each in fat arrow*******..........");
console.log("for each method with using fat arrow function");
myFriends.forEach((element,index ,array) => {
    console.log(element);
});
// fat arrow function did not support this argument


//for each method using simple function
console.log(".........*******for each using simple function*******..........");
console.log("for each method with using simple function");
myFriends.forEach(function (element, index, array) {
    console.log(`${element} whose index is ${index} is member of this ${array}`);
})








// .........difference b/w "for in" ,"for of" and "foreach"................//

/*
1. for in loop gives us only index number of elements in an array
2. for of loop gives us only elements of that array
3. foreach loop gives us "index","elements",and "current array"
*/





//....................Methods in an array........................//
console.log("..................//Methods in an array//............");

console.log("..........1:indexOf()............");
/*
index of method gives us the index of that element in array. It takes element name as an array.
*/
console.log(myFriends.indexOf("Zubair"));



console.log("..........2:lastIndexOf()............");
/*
lastIndexOf method gives us the index of that element in array but it is in reverse method. It takes element name as an array.
*/
console.log(myFriends.lastIndexOf("Zubair"));



console.log("..........3:includes()............");
/*
it checks weather the particular element is available or not. It returns data in true or false.
*/
console.log(myFriends.includes("Hassan"));


console.log("..........4:find()............");
/*
returns the found element in the array if some element in the array satisfies the testing function or undefined.
**[Problem with find method]**
1. it only show first one element that satisfies the condition.(like in our code it should print 300,350 also but it did not)
*/
let myPrices = [500, 120, 300, 350, 400, 450, 500, 600];
const prices = (element) => {
        return element < 400;
}
console.log(myPrices.find(prices));


console.log("..........5:findIndex()............");
/*
it works same like find but it gives index number of that element.
*/
let myPrices2 = [500, 500, 300, 350, 400, 450, 500, 600];
const prices2 = (element) => {
        return element < 400;
}
console.log(myPrices2.findIndex(prices2));



console.log("..........6:filter()............");
/*
find() and findindex() provide information only for one element in array but filter() gives  all the elements that satisfies the condition. 
*/
let filterPrice = [200, 300, 599, 400, 800, 320, 100];
let myPriceFunc = (e) => {
return e < 400
// return e > 1000
}
console.log(filterPrice.filter(myPriceFunc));


console.log("..........7:sort()............");
// this method sorts elements in assending or desinding order 
let alphabets = ["C", "A", "D", "B"]
let numbers = ["2", "3", "4", "1"]
console.log(numbers.sort());


console.log("..........8:push()............");
// push method adds an element at the end of an array
let animals = ["Goat", "Cow"]
animals.push("horse","camel");
console.log(animals);



console.log("..........9:unshift()............");
// unship method adds an element at the start of an array
let vehicle = ["Car", "Bus"]
vehicle.unshift("Airplane","Train");
console.log(vehicle);


console.log("..........10:pop()............");
// pop method removes the element from end of an array
let vehicle2 = ["Car", "Bus","Airplane"]
console.log(vehicle2);
console.log(vehicle2.pop());
console.log(vehicle2);


console.log("..........11:shift()............");
// shift method removes the element from start of an array
let vehicle3 = ["Car", "Bus","Airplane"]
console.log(vehicle3);
console.log(vehicle3.shift());
console.log(vehicle3);



console.log("..........12:splice()............");
// splice method is used to add or remove an element at any place in array
/*
first parameter is the index number of required element. second number determines the number of elements to be removed and third parameter is a value which we wanted to add.
*/
let months = ["Jan", "March","Aug","Feb"]
console.log(months);
console.log(months.splice(2,2,"hello",""));
console.log(months);



console.log("..........13:map()............");
/*
Map method is same like foreach method but it is prefferable because 
map method not change the original array. it returns new array while foreach change the original array. as for each return undefined at the end.
we can attach multiple method like reduce, filter and sort with map method.
*/
let games=["Cricket","Hockey","Tenis","Swimming"]
console.log(games.map((element, index, array) => {
    console.log(`elements=${element} ,index:${index}, array:${array}`);
}));

// it will return result true and false
let greaterNum =[3,8,29,5,23,12]
let myG = greaterNum.map((e) => {
    return e < 19
    
});
console.log(myG);



// problem return the square root of each element of array///////////////// 
// try foreach instead of map method it will return undefined 
console.log("..........***Problem:Return the square root***.......... ");
let arr = [25, 36, 49, 64, 81]
let convertedArr = arr.map((e) => {
return e = Math.sqrt(e)
});
console.log(convertedArr);

console.log("..........***Problem2:multipy each element with 2 and return element greater than 10***.......... ");
let arr2 =[2, 4, 8, 6]
let multNumb = arr2.map((e) => {
    return e*2
}).filter((e) => {
   return e>10
})
console.log(multNumb);





console.log("..........14:reduce()............");
/*
Reduce method is used to convert 3d or 2d array into single dimension array. or we can say we need reduce method where we need a single value result.
accumulate is like a box which hold all the values everytime loop run
*/
let redArr = [2, 4, 5]
let redArrNew = redArr.reduce((accumulate, value, index, arr) => {
    debugger;
    return accumulate += value
    
},6)  //at this line 6 is call initial value which we already have. This is not necessary becuase we never have always a value which is being added in initial value.
console.log(redArrNew);

/////////////////////////////////////////////////////////////////
// map, filter and reduce methods are very important
/////////////////////////////////////////////////////////////////

// how to convert two dimensional array to one dimensional array. 
let twoDimArr = [
    ["one", "two"],
    ["three", "four"],
    ["five", "six"],
    ["seven", "eight"]
];
let myDim =twoDimArr.reduce((accumulate , curValue) => {
    return accumulate.concat(curValue)
});
console.log(myDim);
// you can see our multidimensional array has been changed to one dimensional array.to convert arrays in arrays we have another method. 












