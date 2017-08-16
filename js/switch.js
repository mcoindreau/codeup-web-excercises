"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value

// 1. Variable declaration 2. Assignment
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // NOT an expression; doesn't return value

// 1. Variable declaration 2. Assignment
//arithmatic operation is an expression
// a function call is an expression IF it return a value

// var colors; ---- NOT an expression ---
// var colors = ['red', 'orange'] ---- It IS an expression ----
// console.log(colors); ---- NOT an expression b/c just printing out value ---

var color = colors[Math.floor(Math.random()*colors.length)]; // NOT an expression; doesn't return value


console.log(color);

    // TODO: create a case statement that will handle every color except indigo and violet

//Sequential statements

// Compound statement, or composite statement

    switch(color) { // 1 statement
    case "red":
        console.log("Red");
        break;
    case "orange":
        console.log("orange");
        break;
    case "yellow":
        console.log("yellow");
        break;
    case "green":
        console.log("green");
        break;
    default:
        console.log("I do not know anything by that color.");
    }

    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    //     if (color === "red") {
    //         alert("Apples are Red");
    //     } else if (color === "orange") {
    //         alert("Oranges are Orange");
    //     } else if (color === "yellow") {
    //         alert("Codeup ducks are Yellow");
    //     } else if (color === "green") {
    //         alert("Grass is Green");
    //     } else if (color === "blue") {
    //         alert("The sky is Blue");
    //     } else if (color === "indigo") {
    //         alert("Indigo is indigo");
    //     } else if (color === "violet") {
    //         alert("Violets are violet");
    //     } else {
    //         alert("It's NOT red, orange, yellow, green, blue, indigo or violet");
    //     }

    // TODO: create a default case that will catch indigo and violet
    //     if (color === "indigo") {
    //         console.log("My favorite color is Indigo");
    //     } else if (color === "violet") {
    //         console.log("Your favorite color is Violet");
    //     } else {
    //         console.log("I do not know anything by that color.");
    //     }
    // TODO: for the default case, log: I do not know anything by that color.

// input -> procedure -> output
//
// input -> how much each person bought?

var cameronTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;

// process -> use conditional to determine if the discount should be applied

var minSale = 200;
var discountCameron;
var discountRyan;
var discountGeorge;


if (cameronTotal > minSale) {
    discountCameron = .9 - cameronTotal;
}
else {
    discountCameron = cameronTotal;
}

if (ryanTotal > minSale) {
    discountRyan = .9 - ryanTotal;
}
else {
    discountRyan = ryanTotal;
}

if (georgeTotal > minSale) {
    discountGeorge = .9 - georgeTotal;
}
else {
    discountGeorge = georgeTotal;
}

// output -> Price before, price after for each person

console.log('Cameron\'s total is $' + cameronTotal + ' after discount is $' + discountCameron);
console.log('Ryan\'s total is $' + ryanTotal + ' after discount is $' + discountRyan);
console.log('George\'s total is $' + georgeTotal + ' after discount is $' + discountGeorge);



// var shopperNames = ['Cameron','Ryan','George'];
// var shopperName = shopperNames[Math.floor(Math.random()*shopperNames.length)];
//
// console.log(shopperName + ' is the shopper\'s name');
//
// switch(shopperName) {
//     case "red":
//         console.log("Red");
//         break;
//     case "orange":
//         console.log("orange");
//         break;
//     case "yellow":
//         console.log("yellow");
//         break;
//     default:
//         alert("I do not know anything by that color.");
// }


// Flip a coin exercise

// Input
var flipACoin = Math.floor(Math.random()* 2);

// process
var message;
if (flipACoin === 1){
    message = "Buy a CAR";
}
else {
    message = "Buy a HOUSE";
}



var message2;
message2 = flipACoin === 1? "Buy a CAR" : "Buy a HOUSE";

// output
console.log(message);
console.log(message2);




// Input
var receipt = 60;
var luckyNumber = Math.floor(Math.random()* 6)


// Process
var total, discount;
switch(luckyNumber) {
    case 0:
        discount = 0;
        total = receipt;
        break;
    case 1:
        discount = 0;
        total = .9 * receipt;
        break;
    case 2:
        discount = 25;
        total = .75 * receipt;
        break;
    case 3:
        discount = 30;
        total = .7 * receipt;
        break;
    case 4:
        discount = 50;
        total = .5 * receipt;
        break;
    case 5:
        discount = 100;
        total = 0;
        break;
}


// Output
console.log("Your total discount is " + total)





var luckyNumber = Math.floor(Math.random()* 6)
var SubTotal = 60;
var GrandTotal

switch(luckyNumber) {
    case 0:
        GrandTotal = SubTotal;
        console.log("Your lucky number is " + luckyNumber);
        console.log(GrandTotal);
        break;
    case 1:
        GrandTotal  = (SubTotal - (SubTotal * .10));
        console.log("Your lucky number is " + luckyNumber);
        console.log(GrandTotal);
        break;
    case 2:
        GrandTotal  = (SubTotal - (SubTotal * .25));
        console.log("Your lucky number is " + luckyNumber);
        console.log(GrandTotal);
        break;
    case 3:
        GrandTotal  = (SubTotal - (SubTotal * .30));
        console.log("Your lucky number is " + luckyNumber);
        console.log(GrandTotal);
        break;
    case 4:
        GrandTotal  = (SubTotal - (SubTotal * .50));
        console.log("Your lucky number is " + luckyNumber);
        console.log(GrandTotal);
        break;
    case 5:
        GrandTotal  = 0;
        console.log(GrandTotal);
        console.log("Your lucky number is " + luckyNumber);
        break;
    default:
        alert("I'm not sure");
}


// Number exercise
var maybe = confirm("Do you want to enter a number?");

if (maybe === true){
     var ProbablyANumber = prompt("Enter a number");
     if (isNaN(ProbablyANumber)){
         alert("That is not a number");
     }
     else {
         if(ProbablyANumber %2 === 0){ //its even
             alert("Your number is even")
         }
         else {
             alert("Your number is odd")
         }
         alert(Number(ProbablyANumber) + 100);
         if(ProbablyANumber > 0){
             alert("Your number is positive");
         }
         else{
             alert("Your number is negative");
         }
     }
}



