// set timeout method 
// The set timeout method runs a function after specified time 
//setTimeout(function,time in milliseconds);
// clearTimeout function will stop execution of setTimeout function 
console.log(".............**setTimeout method**...............");
let time = new Date()
let timeFunc = ()=>{
    console.log(time.toLocaleString());
}



//setInterval method will run function after that particular time
//setInterval(function,time in milliseconds);
//clearInterval(referance variable);
