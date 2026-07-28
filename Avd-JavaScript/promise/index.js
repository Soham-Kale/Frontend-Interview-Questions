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


// promise combination:
// 1. Promise.all(): It takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.
// 2. Promise.race(): It takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
// 3. Promise.allSettled(): It takes an array of promises and returns a single promise that resolves when all of the promises in the array have settled (either resolved or rejected), with an array of objects that each describe the outcome of each promise.
// 4. Promise.any(): It takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array resolve, or rejects if all of the promises in the array reject.


Promise.all([
    importantAction("Billionaire"),
    likeVideo("Javascript interview questions"),
    shareVideo("videos to my friends")
]).then((res)=> {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


// async await
const result = async () => {
    try {
        const message1 = await importantAction("Billionaire");
        console.log(message1);
        const like = await likeVideo("Javascript interview questions");
        console.log(like);
        const share = await shareVideo("videos to my friends");
        console.log(share);
    
        // console.log({ message1, like, share });
    } catch (error) {
        console.log("Promise failed: ", error);
    }
}

result();

console.log("Stop");