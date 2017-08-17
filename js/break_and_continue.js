'use strict'
// Break and Continue

// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

var number = 0; //not necessary

// while(true){
//     //Ask question
//     number = prompt("Give me a number between 1 and 50");
//     number = parseInt(number);
//     if ( (number >= 1 && number <= 50) && number % 2 == 1){ //%2==1 will find the remainder of 1 will equal ODD -- DON'T USE %2 != 0
//         console.log("Found odd number between 1 and 50");
//         break;
//     }
//
// }


number = prompt("Give me a number between 1 and 50");
number = parseInt(number);

for(var i = 1; i <= 50; i+=2){
    if(number === i){
        console.log('Number to skip is: ' + i);
        continue;
    }
    console.log('Here is an odd number ' + i);
}


//for(var i = 1; i <= 50; i+=5){
