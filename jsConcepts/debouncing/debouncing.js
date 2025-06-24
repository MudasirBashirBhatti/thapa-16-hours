// const apiCall = () => {
//     console.log('api call...');
// }

// let timeout;
// const timeFunc = (func, delay) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(func, delay);
// }

// const debounceFunc = () => {
//     timeFunc(apiCall, 500)
// }

// ?......................debouncing using closure...................

const debounce = (fn, delay) => {

    let timeoutId;
    return () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(fn, delay);
    }
}

const search = () => {
    console.log('api call....');
}

const debounceSearch = debounce(search, 1000)