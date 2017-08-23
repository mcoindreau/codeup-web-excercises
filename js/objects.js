(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    //var person = "Marianna";
        // var object = {};
    var person = new Object();
    console.log("Person var is " + typeof person);


    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    person = {
        firstName: "Marianna",
        lastName: "Coindreau"
    };
    console.log(person);


/**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    //person.sayHello = function(){
    //    return "Hello from " + this.firstName + " " + this.lastName + "!";
    //}; //literal function representation
    //console.log("Hello from " + sayHello + "!");

    var sayHello = (person.firstName + " " + person.lastName);
       console.log("Hello from " + sayHello + "!");

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    for (var i = 0; i < shoppers.length; i++){

    var discount = 0;
    var totalAfterDiscount = shoppers[i].amount;
    // constant
    //console.log("Cameron has to pay $180, he has discount of $0, the total after the discount is $0");

    //1. variable

    // 2. Conditionals
    if (shoppers[i].amount > 200) {
        discount = .1;
        totalAfterDiscount = shoppers[i].amount - shoppers[i].amount * discount;
    }

    console.log(shoppers[i].name + " has to pay $" + shoppers[i].amount, "he has discount of $"+ discount + ", the total after the discount is $" + totalAfterDiscount);

    }

})();
