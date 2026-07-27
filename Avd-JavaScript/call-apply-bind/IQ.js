// Que: 1
const obj = { name: "Priya" }

function sayHello(age) {
    return `${this.name} is ${age}`
}

// console.log(sayHello.call(obj, 22));    // Priya 22
// console.log(sayHello.bind(obj, 22));    // return function


// Que: 2
const age = 12;

const person = {
    name: "Soham",
    // age: 22,
    getAge: function() {
        return this.age;     // 22
    }
};

var person2 = { age: 33 };
let ans = person.getAge.call(person2);
// console.log(ans);  // 33

// Que: 3
var status = "😍";

setTimeout(() => {
    const status = "💗";

    const data = {
        status: "🚀",
        getStatus() {
            return this.status;
        },
    };

    // console.log(data.getStatus());   // 🚀
    // console.log(data.getStatus.call(this));   // 💗
}, 0);


// Que: 4
const animal = [
    { species: "Lion", name: "King"},
    { species: "Tiger", name: "Queen"},
]

function printAnimals(i) {
    this.print = function() {
        console.log("# " + i + " " + this.species + " : " + this.name);
    },
    this.print();
}

for(let i=0; i<animal.length; i++) {
    printAnimals.call(animal[i], i)
}


// Que: 5  Append an array to another array
const array = ["a", "b"];
const element = [1, 2, 3];

array.push.apply(array, element);
console.log(array);


// Que: 6
function checkPassword(success, failed) {
    let password = prompt("password", "");
    if(password == "Rodeside Code") success("");
    else failed();
}

let user = {
    name: "Soham Kale",

    loginSuccessful() {
        console.log(`${this.name} is loggedin`); 
    },

    logOutSuccessful() {
        console.log(`${this.name} failed to login`); 
    }
}

checkPassword(user.loginSuccessful, user.logOutSuccessful);