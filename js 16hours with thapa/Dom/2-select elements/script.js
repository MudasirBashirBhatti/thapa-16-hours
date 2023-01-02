console.log(document.documentElement);


// 1. first way access the element in parent 
console.log("...........**first way access the element in parent**.........");
console.log(document.body.firstElementChild.firstElementChild);

// 2. second way access the element in parent 
console.log("...........**second and most favourite way access the element using query selector**.........");
console.log(document.querySelector(".child1"));

// 3. access previous sibling 
console.log("...........**access previous sibling **.........");
console.log(document.body.previousElementSibling);

// 4. access next sibling 
console.log("...........**access next sibling **.........");
console.log(document.querySelector("#parent").nextElementSibling);