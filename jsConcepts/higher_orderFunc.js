// a function that takes another function as an argument is called higher order function

const add = (a, b, callback) => {
    const result = a + b;  //this can be a timetaking task
    callback(result)
}

add(3, 5, (val) => console.log(val))


// or a function that returns another function

const subtract = (a, b) => {
    return () => {
        console.log(a - b);
    }
}

const subtractor = subtract(12, 2)
subtractor()