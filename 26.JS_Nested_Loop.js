// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var n = 5
// for( var i = 1; i <= n; i++ ){
//     var result = ''
//     for(var j = 1; j <= i; j++){
//         result = result + j + ' '
//     }
//     console.log(result)
// }
// Output :
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



// * * * * *
// * * * *
// * * *
// * *
// *

/*i means line number*/
// for(var i = 1; i <= 5; i++){                   
//     var result = ''
//     /*j means star*/
//     for(var j = 5; j >= i; j--){
//         result +=  '* '
//     }
//     console.log(result);
// }
//Output: 
// * * * * *
// * * * *
// * * *
// * *
// *



//         *
//       * * 
//     * * *
//   * * * *
// * * * * *

// i means line number. How much line we print
// for(var i = 1; i <= 5; i++){
//     var space = " "
//     var star = " "
//     // j means space.
//     for(var j = 1; j <= (5-i)* 2; j++){
//         space += " "
//     }
//     for(var k = 1; k <= i; k++){
//         star += "* "
//     }
//     process.stdout.write(space)
//     // process.stdout.write(star)
//     console.log(star)
// }
