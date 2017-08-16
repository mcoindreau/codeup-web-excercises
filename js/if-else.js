"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'red'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

// var favoriteColor = prompt ("What is your favorite color?");

console.log(color);
if (color === "red") {
    console.log("My favorite color is Red");
} else if (color === "orange") {
    console.log("Your favorite color is Orange");
} else if (color === "yellow") {
    console.log("Your favorite color is Yellow");
} else if (color === "green") {
    console.log("Your favorite color is Green");
} else if (color === "blue") {
    console.log("Your favorite color is Blue");
} else {
    console.log("It's NOT red, orange, yellow, green or blue. It must be indigo or violet");
}


// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
if (color === "red") {
    console.log("Apples are Red");
} else if (color === "orange") {
    console.log("Oranges are Orange");
} else if (color === "yellow") {
    console.log("Codeup ducks are Yellow");
} else if (color === "green") {
    console.log("Grass is Green");
} else if (color === "blue") {
    console.log("The sky is Blue");
} else if (color === "indigo") {
    console.log("Indigo is indigo");
} else if (color === "violet") {
    console.log("Violets are violet");
} else {
    console.log("I do not know anything by that color.");
}


//alert("You favorite color is " + favorite);
// (color === favorite) ? console.log(color + " is my favorite color") : console.log(color + "is not");

// TODO: Have a final else that will catch indigo and violet.

if (color === "indigo") {
    console.log("My favorite color is Indigo");
} else if (color === "violet") {
    console.log("Your favorite color is Violet");
} else {
    console.log("I do not know anything by that color.");
}

// TODO: In the else, log: I do not know anything by that color.


// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

var msg = (color === favorite) ? console.log(color + " is my favorite color") : console.log(color + " is not");

switch(color) {
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
    case "indigo":
        console.log("indigo");
        break;
    case "violet":
        console.log("violet");
        break;
    default:
        alert(color + " isn't my favorite, but let's order some!");
        break;
}
