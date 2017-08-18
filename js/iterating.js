(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Terrell', 'Zach', 'Mari', 'Brandon'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log('The first name is: ' + names[0]);

    console.log('The first name is: ' + names[1]);

    console.log('The first name is: ' + names[2]);

    console.log('The first name is: ' + names[3]);

    // TEACHER METHOD
    // change the first number in array

    var numbers = [1, 2, 3, 4, 5];
    // numbers[0] = numbers [0] + 2;

    // for(var i = 0; i < numbers.length; i++);{
    // numbers[i] = numbers[i] + 2;
    // }

    // To avoid the following repetition
    // numbers[0] = numbers [0] + 2;
    // numbers[0] = numbers [0] + 2;
    // numbers[0] = numbers [0] + 2;
    // numbers[0] = numbers [0] + 2;

    // TEACHER METHOD
    numbers.forEach(function (element, index) {
        numbers[index] = element +2;

    });

    console.log(numbers);




})();
