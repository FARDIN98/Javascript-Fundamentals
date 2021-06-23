var userName = ''

if(userName.length === 0){
    fullName = "Fardin Ahmed"
}else{
    fullName = userName
}
console.log(fullName);
// Output: Fardin Ahmed

var fullName = userName || 'Fardin'
console.log(fullName);
// Output: Fardin

var name = 'Ahmed'
var fullName = userName || 'Fardin'
console.log(fullName);
// Output: Ahmed

var isOK = true
isOK && console.log('Everything is fine')
// Output: Everything is fine

var isOK = false
isOK && console.log('Everything is fine');
// Output: nothing