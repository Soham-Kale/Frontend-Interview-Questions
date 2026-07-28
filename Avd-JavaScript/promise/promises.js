// Promises in javascript are used to handle asynchronous operations. 
// They represent a value that may be available now, or in the future, or never. 
// A Promise is in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.


console.log("Start");

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if(result) resolve("Subscribe to Roadeside Coder");
        else reject(new Error("Why aren't you Subscribe to Roadeside Coder"));
    }, 1000);
});

sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

console.log("Stop");


// syncronous vs asynchronous code

// synchronous code: It executes code line by line.
console.log("Hello");
console.log("Soham");
console.log("How are you ?");


// asynchronous code: It switchs context between them
console.log("Hello");

setTimeout(() => {
    console.log("Soham");
}, 1000);

console.log("How are you ?");


// Example of asynchronous code using setTimeout
console.log("Start");

function importantAction(userName) {
    setTimeout(() => {
        console.log(`Hello ${userName}`);
    }, 1000)
};

const message = importantAction("Billionaire");
console.log(message);   // undefined