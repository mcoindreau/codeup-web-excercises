"use sctrict";
// Excercise #2 --- Numbers 2 through 65536

// var num = 2;
//
// while (num < 65536) {
//     num = num * 2; //num =* 2;
//     console.log("The number is: " + num);
// }

// TEACHER INSTRUCTION
// var limit = 65536; //part of my condition
// var powersOfTwo = 2;
//
// while (powersOfTwo <= limit){
//     console.log('Here is the answer' + powersOfTwo);
//     powersOfTwo *= 2;
// }

// Excercise #3 --- Ice cream

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// var conesLeft = allCones;
//
// var coneSold = Math.floor(Math.random() * 5) + 1; //WHY
//
// do {
//
//     // This is how you get a random number between 1 and 5
//     var coneSold = Math.floor(Math.random() * 5) + 1; //WHY is it infinite???
//
//     if (coneSold > conesLeft) {
//         console.log('i cant sell you ' + coneSold + " becauase i only have " + conesLeft);
//     }
//     else {
//         conesLeft = conesLeft - coneSold;
//         console.log(coneSold + ' number of cones sold');
//     }
//
// } while (conesLeft > 0);
//     console.log('SOLD OUT');



//TEACHER INSTRUCTION
var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var cones = Math.floor(Math.random() * 5) + 1; //Needs to run while INSIDE the loop

    if (cones > allCones) {
        console.log('Cannot sell you ' + cones + " becauase I only have " + allCones);
        continue; //will skip else
    }
    allCones -= cones;
    console.log(cones + ' number of cones sold');

} while (allCones > 0);
console.log('SOLD OUT');


















