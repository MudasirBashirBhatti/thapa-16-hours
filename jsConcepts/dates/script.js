let date = new Date()
let oldDate = new Date("10/02/2001")

const totalYears = (date - oldDate) / 1000 / 3600 / 24 / 365.25
console.log(totalYears)  //this will return years 