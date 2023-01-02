
let line = document.getElementsByClassName("line")
let input = document.querySelector("input");
let divider = document.getElementsByClassName("divider");
let num = document.getElementsByClassName("num");
let result = document.getElementsByClassName("result")


// this is the function of changing class num innerHTML 
function Myline() {
    // let input = document.querySelector("input")
    // let num = document.getElementsByClassName("num");
    for (let x = 0; x < num.length; x++){
        num[x].innerHTML = input.value;

        if (input.value === "") {
            for (let x = 1; x < num.length; x++) {
                num[x].innerHTML = 5;
            }
        }
    }
}
    

// function of changing divider class text 
let Mydivider = () => {
    for (x = 0; x < divider.length; x++){
        divider[x].innerHTML = x;
    }
}

// function for printing result 
let myResult = () => {
    for (x = 0; x < result.length; x++){
        result[x].innerHTML = input.value * x;
        if (input.value == "") {
            result[x].innerHTML = 5 * x;
        }
    }
}




// ........................ 


