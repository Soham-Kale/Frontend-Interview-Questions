// Call, Apply, Bind

const obj = { name: "Soham" };

function sayHello() {
    return "Hello: " + this.name;
}

console.log(sayHello.call(obj));