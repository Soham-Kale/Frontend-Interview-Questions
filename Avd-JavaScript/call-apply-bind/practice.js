// Output based questions from chat gpt

const obj = { name: "Soham" }

function sayHello(age, role) {
    return `Hello ${this.name} from this side with ${age} YO as a ${role} `;
}

console.log(sayHello.call(obj, 22, "Software Developer"));


// Que.1
const person = {
    name: "Soham",
};

function greet() {
    console.log(this.name);
}

greet.call(person);     // Soham


// Que.2
const user = {
    name: "Rahul",
};

function show(age) {
    console.log(this.name, age);
}

show.call(user, 25);     // Rahul 25


// Que.3
const obj1 = {
    name: "React",
};

function print(a, b) {
    console.log(this.name, a, b);
}

print.apply(obj1, [10, 20]);     // React 10 20


// Que. 4
const person1 = {
    city: "Pune",
};

function display() {
    console.log(this.city);
}

const fn = display.bind(person1);
fn();   // Pune


// Que.5
var name = "Global";

const obj2 = {
    name: "Object",
};

function test() {
    console.log(this.name);
}

const bound = test.bind(obj2);
bound.call({ name: "Another" });   // 