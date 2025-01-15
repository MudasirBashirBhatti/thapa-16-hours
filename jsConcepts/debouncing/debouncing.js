const apiCall = () => {
    console.log('api call...');
}

let timeout;
const timeFunc = (func, delay) => {
    clearTimeout(timeout)
    timeout = setTimeout(func, delay);
}

const debounceFunc = () => {
    timeFunc(apiCall, 500)
}