(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Terrell', 'Zach', 'Mari', 'Brandon'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    //console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    //BEFORE LOOP
    // console.log('The first name is: ' + names[0]);
    //
    // console.log('The first name is: ' + names[1]);
    //
    // console.log('The first name is: ' + names[2]);
    //
    // console.log('The first name is: ' + names[3]);

    for(var x = 0; x < names.length; x++){
        console.log(names[x]);
    }

    names.forEach(function (element, index) {  //only use forEach when looking through all names in arrays
        //names[index] = element; //not needed
        console.log(element);
    });

    //INSTRUCTOR METHOD
    var printNames = function (element) {
        console.log(element);
    }
        names.forEach(printNames);





})();
