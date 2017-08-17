

var limit = 5;
var counter = 1; //Initialization
counter = 1;

while (counter <= limit){ //This may never be executed
    // console.log(counter);
    // counter ++; //Increment

    console.log("While loop" + counter);
    counter++; //Increment


//If 'if' doesn't go below, will loop infinitely'
    if (counter === 2){
        console.log("We are skipping the number 2");
        continue;
    }
}

// This is going to be executed at least once
counter = 1;
do {
    console.log(counter);
    counter++; //Increment
} while (counter <= limit); //Condition

for(
    counter = 1; //1. First time (once)
    counter <= limit; //2. Should I continue?
    counter++ // 4. Increment -> go to condition
){
    // you're repeating an action, but the data is different
    //console.log(counter); //3. Body
    if(counter ===3){
        console.log("You reached the number 3");
    }
}