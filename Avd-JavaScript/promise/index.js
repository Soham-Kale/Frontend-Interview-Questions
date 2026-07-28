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

function importantAction(userName, cb) {
    setTimeout(() => {
        cb(`Hello ${userName}`);
    }, 1000)
};

function likeVideo(video, cb) {
    setTimeout(() => {
        cb(`I liked your ${video}`);
    }, 500);
}

const message = importantAction("Billionaire", function(message) {
    console.log(message);   
    likeVideo("YT Video", (video)=> {
        console.log(video);
    });
});

console.log("Stop");