/*we can use global scope variable everywhere in our program.
e.g var is global scope variable
*/

/*
blockscope variables can only be used within scope "{....}".
e.g. "let" and "const" are blockscope variable and cannot execute outside of scope.Means we can use these variables only in that scope where these variables are assigned a value.
To see difference change var to let or const variable. 
*/

function myFunc() {
    let firstName = "Mudasir";
    console.log(firstName);

    if(true){
        let lastName = "Bashir";
        console.log("inner " + firstName);
        console.log("inner " + lastName);
    }
    console.log(lastName);
}
myFunc();