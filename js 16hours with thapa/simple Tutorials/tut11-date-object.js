// Date objects contain a number that represents milliseconds since 1 january 1970.

// .........................4 Methods to create date objects.................
// 1. new Date()
// 2. new Date(year , month , day , hour , minutes , seconds , milliseconds)
// 3. new Date (milliseconds)
// 4. new Date(date string)

let myDate = new Date();
console.log(".................****toLocalString()****..............");
console.log(myDate.toLocaleString());

console.log(".................****toLocalTimeString()****..............");
console.log(myDate.toLocaleTimeString());

console.log(".................****toLocalDateString()****..............");
console.log(myDate.toLocaleDateString());


console.log(".................****(new Date(2021,2).toLocaleString()****..............");
// at leaset give two arguments year and month for proper Work.more over you can also pass all these parameters(year , month , day , hour , minutes , seconds , milliseconds)
console.log(new Date(2021, 2).toLocaleString());



console.log(".................****new Date(dateString)****..............");
console.log(new Date("October 3, 2021 01:13:00").toLocaleString());
console.log(new Date("3 October 2021 01:13:00").toLocaleString());
console.log(new Date("2021 3 October 01:13:00").toLocaleString());





///////////////////////.....Date Methods......./////////////////////////////
let currentDate = new Date()

console.log(".................****.getDate()****..............");
console.log(currentDate.getDate());


console.log(".................****.getDay()****..............");
console.log(currentDate.getDay());

console.log(".................****.getFullYear()****..............");
console.log(currentDate.getFullYear());

console.log(".................****.getMonth()****..............");
console.log(currentDate.getMonth());

console.log(".................****.getUTCDate()****..............");
console.log(currentDate.getUTCDate());

console.log(".................****.getUTCDay()****..............");
console.log(currentDate.getUTCDay());

console.log(".................****.getUTCFullYear****..............");
console.log(currentDate.getUTCFullYear());

console.log(".................****.getUTCMonth****..............");
console.log(currentDate.getUTCMonth());








///////////////////////.....time Methods......./////////////////////////////

console.log(".................****.getTime()****..............");
console.log(currentDate.getTime());

console.log(".................****.getHours()****..............");
console.log(currentDate.getHours());


console.log(".................****.getMinutes()****..............");
console.log(currentDate.getMinutes());

console.log(".................****.getSeconds()****..............");
console.log(currentDate.getSeconds());

console.log(".................****.getMillisecons()****..............");
console.log(currentDate.getMilliseconds());

console.log(".................****.getUTCHours()****..............");
console.log(currentDate.getUTCHours());

console.log(".................****.getUTCMinutes()****..............");
console.log(currentDate.getUTCMinutes());

console.log(".................****.getUTCSeconds****..............");
console.log(currentDate.getUTCSeconds());

console.log(".................****.getUTCMillisecons****..............");
console.log(currentDate.getUTCMilliseconds());

