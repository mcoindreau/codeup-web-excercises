
function makeRequest(delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()//sets the setTimeout for resolve parameter
        }, delayTime);
    });
}

makeRequest(1000).then(() => console.log('You\'ll see this after 1 second'));
makeRequest(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function makeRequest(delayTime){
//     return new Promise(function(resolve, reject){
//         setTimeout(resolve, delayTime);
//         setTimeout(reject, 6000)
//     })
// }
//
// makeRequest(1000).then(() => console.log('You\'ll see this after 1 second'));
// makeRequest(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// makeRequest(7000).then(() => console.log('T-ERROR'));


// PAToken


// key is telling GitHub who is requesting information
function getCommit (username) {

    let url = `https://api.github.com/users/${username}/events`;

    return fetch(url, {headers: {'Authorization': 'token a93c512eb3c7631d680e608862fdbbb23216a231'}})

        .then((response) => response.json())
        .then((repos) => repos.map((repo) => repo.pushed_at));
}

    getCommit('mcoindreau').then((lastCommit) => console.log(lastCommit)); //call the function, pass string