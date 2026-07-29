// Promises in javascript
// outputbased questions

console.log("Start");

const promise1 = new Promise((resolve, reject) => {
    console.log(1);    // synchronous code 
    resolve(2);
});

// asynchronous - wait
promise1.then((res) => {
    console.log(res);
})

console.log("Stop");

// js runs first synchronous then asynchronous code.

// start
// 1
// stop
// 2 


//-------------------------------- Que.2 ------------------------------------
console.log("Start");

const fn = () => 
    new Promise((resolve, reject) => {
        console.log("Hello Billionaire");
        resolve("Success");
    })

console.log("Middle");

fn().then((res) => {
    console.log(res);
});

console.log("Stop");
// start
// middle
// Hello Billionaire
// stop
// Success


//-------------------------------- Que.3 ------------------------------------
function job() {
    return new Promise((resolve, reject) => {
        reject();
    })
};

let promise = job();

promise
    .then(() => {
        console.log("Success1");
    })
    .then(() => {
        console.log("Success2");
    })
    .then(() => {
        console.log("Success3");
    })
    .then(() => {
        console.log("Success4");
    })
    .catch((err) => {
        console.log("Error1");
    })
    .then(() => {
        console.log("Success5");
    })

// Error1
// success5


//-------------------------------- Que.4 ------------------------------------
function job(state) {
    new Promise((resolve, reject) => {
        if(state) {
            resolve("Success");
        } else{
            reject("error");
        }
    })
};

let promise = job(true);

promise
    .then(function(data) {
        console.log(data);

        return job(false);
    })
    .catch(function(error) {
        console.log(error);

        return "Error caught";
    })
    .then(function(data) {
        console.log(data);

        return job(true);
    })
    .catch(function(error) {
        console.log(error);

        return "Error caught";
    })
    
// Success
// Error
// Error caught


//-------------------------------- Que.5 ------------------------------------
// Rewrite this example code using `async await` instead of `.then catch` 
// function loadJSON(url) {
//     return fetch(url).then((res) => {
//         if(res.status === 200) {
//             return res.json();
//         } else {
//             throw new Error(res.status);
//         }
//     })
// };

// loadJSON("https:dummyapi").catch((err) => {
//     console.log(err);
// });


async function loadJSON(url) {
    let response = await fetch(url);

    if(response.status === 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(res.status);
};

loadJSON("https:dummyapi").catch((err) => {
    console.log(err);
});
