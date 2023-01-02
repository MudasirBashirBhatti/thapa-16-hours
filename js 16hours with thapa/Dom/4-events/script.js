// onclick method apply in button method 
console.log(".........**onclick method apply in button method**.......");

let btn1 = () => {
    alert("Hello btn1 clicked")
}


console.log(".........**method2**.......");
let button2 = document.getElementById('btn2');
button2.onclick = function() {
    alert("btn2 has been clicked");
}



console.log(".........**method3 using eventlistner**.......");
//we can call same event multiply times without any error
let listner = document.querySelector("#btn3");
listner.addEventListener('click', () => {
    alert("hello I'm here using event listner");
});



//..................//event objects//.......................//
/*
Event object is the parent object of the event object.It provides more information about particular event.
*/
console.log("...............**What are event objects**................");
let evTarget = document.querySelector("#btn4");
let myTarget = () => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
evTarget.addEventListener('click', myTarget);



