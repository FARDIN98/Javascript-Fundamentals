var date = new Date()
console.log(date)
// Output : 2021-02-15T13:24:54.675Z
console.log(date.toDateString())  
// toDateString() shows specific date & time.
// Output : Mon Feb 15 2021
console.log(date.toTimeString())
// Output : 19:37:28 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString())
// output: 2/15/2021, 7:41:08 PM
console.log(date.getFullYear())
// Output : 2021
console.log(date.getMonth())
// output: 1
console.log(date.getDate())
// output : 15
console.log(date.getHours())
// output : 20
console.log(date.getMinutes())
// output : 35 minutes
console.log(date.getSeconds())
// Output : 26