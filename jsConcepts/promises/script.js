// syncronus task run in sink line by line
let a = 3;
let b = 4;

let result = a + b

// asyncronus task 
const getTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(response)
}

getTodos()
console.log(a + b)

// first result will be printend and then getTodos because in get getTodos there is a promise which take some time to resolve or reject. even though getTodos is first in que