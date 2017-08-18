"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

// define a function and immediately invoke (i.e. call) it
// (function () {
//     var iffeVar = "I'm local to the IIFE.";

function sayHello(name) { //Parameters are the input for the functions
    return "hello, " + name;
}

// *** TEACHER INSTRUCTION ***
//     pattern -> function signature
//     functionName(type parameters...) : returnType
//     sayHello(string name): string

    // sayHello('Mari'); functions are expressions if they return something (value)



    /**
 * TODO:
 * Call the function 'sayHello', pass your name as a string literal.
 * Store result of the function call in a variable 'helloMessage'.
 * console.log 'helloMessage' to check your work
 * store your name as string in variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// stored result into variable//
    var helloMessage = sayHello('Mari');

    // log(string messages): void (undefined)
    console.log(helloMessage);

    var myName = "Mari";
    sayHello(myName);


// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

console.log("Random is " + random.toString());

function IsOdd(numToTest) {
    (numToTest % 2 === 1) ? console.log("Is odd number" ) : console.log("it is even");

}
    IsOdd(random);


/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */
// function calculateTip (tipPercentage, billTotal) {
//     return tipPercentage * billTotal;
// }
// console.log(calculateTip(.50, 20));

    // INSTRUCTOR METHOD
    function calculateTip (percentage, total) {
        var tip = (percentage / 100) * total;
        return tip;

        console.log(calculateTip(18, 100));
    }

/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

    // var Total = prompt("What is the bill total?");
    //
    // var likeToTip = prompt("What percentage would you like to tip?")
    //
    // alert("You should tip $" + 100 / likeToTip);

    // INSTRUCTOR METHOD
    function askForCheck(){
        var total = prompt("What is the bill total?");
        var percentage = prompt("What percentage would you like to tip?");
        var tip = calculateTip(percentage, total);
        console.log("You should tip $" + tip);

    }







})();