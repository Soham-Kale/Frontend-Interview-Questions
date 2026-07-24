// 

const user = {
    name: "Virat Kohli ",
    loggedMessage() {
        console.log(this.name);
    }
}

// setTimeout(user.loggedMessage, 1000);
setTimeout(function() {
    user.loggedMessage()
}, 1000);


const user1 = {
    name: "Soham",

    greet() {
        return `Hello ${this.name}`
    },
    farewell: () => {
        return `Goodbye ${this.name}`
    }
}

console.log(user1.greet());   // opt::  Hello Soham
console.log(user1.farewell());   // opt:: Goodbye undefine