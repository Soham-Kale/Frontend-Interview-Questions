// Call, Apply, Bind

const obj = { name: "Rohit" };

function getName() {
    return "Hello: " + this.name;
}
console.log(getName.call(obj));


// Apply work same like call but it take multiple params as a array.
const obj1 = { name: "Soham" };

function getName(age, profection) {
    return "Hello: " + this.name + " is: "+ age + " Year old " + profection;
}

console.log(getName.apply(obj1, [22, "Software Engineer"]));


// bind take function as a input 
const obj2 = { name: "Harsh" }

function sayHello(age, profection) {
    return "Hello: " + this.name + " is: "+ age + " Year old " + profection; 
}

const bindFun = sayHello.bind(obj2);

console.log(bindFun(22, "SWE-1"));
console.log(bindFun(32, "SWE-2"));
