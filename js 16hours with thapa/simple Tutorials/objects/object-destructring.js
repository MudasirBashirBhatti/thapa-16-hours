let obj = {
    fname: "Mudasir",
    lname: "Bashir",
    age: 20
}
let {fname, lname, age , degree="CS"} = obj; //here we add degree at anytime in object
console.log(lname);
console.log(degree);