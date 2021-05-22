// var i = 0
// while(i < 10){
//     console.log(fardin ahmed)
//     i++
// }
// Output : fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed
         // fardin ahmed


var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }else{
        console.log('You have got ' + rand)
    }
}
// Output : You have got 6
         // You have got 2
         // Winner Winner Chicken Dinner
// again
        //You have got 4
        // You have got 7
        // You have got 3
        // You have got 3
        // Winner Winner Chicken Dinner