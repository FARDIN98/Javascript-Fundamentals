var date = new Date()
console.log(date)
// Output : 2021-05-22T10:20:19.912Z
console.log(date.toDateString())  
// toDateString() shows specific date & time.
// Output : Sat May 22 2021
console.log(date.toTimeString())
// Output : 16:20:19 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString())
// output: 5/22/2021, 4:20:19 PM
console.log(date.getFullYear())
// Output : 2021
console.log(date.getMonth())
// output: 4
console.log(date.getDate())
// output : 22
console.log(date.getHours())
// output : 16
console.log(date.getMinutes())
// output : 20 minutes
console.log(date.getSeconds())
// Output : 19