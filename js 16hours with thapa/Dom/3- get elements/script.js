console.log(document.documentElement);


// 1. access elements by getElementsByName 
console.log("...........**access elements by getElementsByName**.........");
console.log(document.getElementsByName('myInput'));

// 1. access elements by getElementsByClassName 
console.log("...........**access elements by getElementsByClassName**.........");
console.log(document.getElementsByClassName('myDiv2'));

// 1. access elements by getElementsById 
console.log("...........**access elements by getElementById**.........");
console.log(document.getElementById('parent'));

// 1. get element by query selector.
/*
we can get elements using querySelector method. class by(".class"), id:("#id"), tagname:("div"). query selector gives only one element while query selecotr all gives all elements related to that particular tab.
*/
console.log("...........**get element by querySelector**.........");
console.log(document.querySelector('.myDiv2'));



