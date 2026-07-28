// Promises in javascript are used to handle asynchronous operations. 
// They represent a value that may be available now, or in the future, or never. 
// A Promise is in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.


// syncronous vs asynchronous code

// synchronous code: It executes code line by line.
// console.log("Hello");
// console.log("Soham");
// console.log("How are you ?");


// asynchronous code: It switchs context between them
// console.log("Hello");

// setTimeout(() => {
//     console.log("Soham");
// }, 1000);

// console.log("How are you ?");


// Example of asynchronous code using setTimeout
// console.log("Start");

// function importantAction(userName) {
//     setTimeout(() => {
//         console.log(`Hello ${userName}`);
//     }, 1000)
// };

// const message = importantAction("Billionaire");
// console.log(message);   // undefined


// Example of asynchronous code using Promises
console.log("Start");

function importantAction(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${userName}`);
        }, 1000)
    })
};

function likeVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I liked your ${video}`);
        }, 2000);
    })
};

function shareVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`I'll share your ${video}`);
        }, 3000);
    })
};

// promise chaning
// importantAction("Billionaire")
//     .then((res) => {
//         console.log(res);
//         return likeVideo("Javascript interview questions");
//     })
//     .then((res) => {
//         console.log(res);
//         return shareVideo("videos to my friends");
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// promise combination
Promise.all([
    importantAction("Billionaire"),
    likeVideo("Javascript interview questions"),
    shareVideo("videos to my friends")
]).then((res)=> {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log("Stop");