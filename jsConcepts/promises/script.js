// promise is an object representing eventual result or failure of an asynchronus function
// syncronus task run in sink line by line
let a = 3;
let b = 4;

let result = a + b

// asyncronus task 
const getTodos = () => {
    let response = fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(response);
    response.then((data) => {
        console.log(data);
    })
}

getTodos()
console.log(a + b)

// first result will be printend and then getTodos because in get getTodos there is a promise which take some time to resolve or reject. even though getTodos is first in que

// ?.................... Create New Promise.................

const myPromise = new Promise((resolve, reject) => {

    const isSuccessfull = false

    if (isSuccessfull) {
        resolve('job done')
    } else {
        reject('this is error')
    }

})

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(`Not get the data due to ${error}`);
})

// ?...................practical scenerio to work with custom promises................
const myLoader = () => {
    return new Promise((resolve) => {
        console.log('loading...');
        setTimeout(() => {
            resolve('loading completed')
        }, 3000);
    })
}

myLoader().then((data) => {
    if (!data) {
        console.log('loading state');
    } else {
        console.log(data);
    }
}).catch((error) => {
    console.log(error);
})