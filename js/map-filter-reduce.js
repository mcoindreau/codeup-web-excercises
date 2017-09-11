// var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens1 = [];
// for (var i = 0; i < numbers1.length; i += 1) {
//     if (numbers1[i] % 2 === 0) {
//         evens1.push(numbers1[i]);
//     }
// }
// console.log(evens1);
//
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]
//
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// console.log(users);


//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

//<!-- want to find users with three languages or more

//<!--Attempt 1-->
// const threePlus = users.filter(function (item) {
//     if (item.languages.length >= 3)
//         return item;
// });
//
// console.log(threePlus);


function hasThreePlus(user) {
    return user.languages.length >= 3
}

let userHasThreePlus = users.filter(hasThreePlus);

console.log(userHasThreePlus);


// *********
// TEACHER INSTRUCTION - want to use length since it's an array **tempArray OR USER**
//console.log(users.filter(tempArray => tempArray.languages.length >= 3)); //** dont do on one line

// let filteredList = users.filter(tempArray => tempArray.languages.length >= 3);
// console.log(filteredList);
// **********



//Use .map to create an array of strings where each element is a user's email address

// *********
// TEACHER INSTRUCTION - How to start, whats expectation? How does MAP work?
   let arrayEmails = users.map (user => {
       return user.email;
});
    console.log(arrayEmails);
// **********

function getEmail(user) {
    return user.email;
}

let allEmails = users.map(getEmail);

console.log(allEmails);

//Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

let reduces = users.reduce((obKeys, obValues) => {
    obKeys[obValues.id] = obValues;
    return obKeys;
}, {});
console.log(reduces);

// *********
// TEACHER INSTRUCTION -
let newObj = users.reduce( (tempObj, user /*call whatever you want ENCHILADA*/) => {
    tempObj[user.id] = user;
    return tempObj;
}, {});
console.log(newObj);
// *********

