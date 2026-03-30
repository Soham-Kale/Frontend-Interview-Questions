// Arrow functions are introduce in ES6 version of javascript
// Arrow function VS Regular Function

// 1. Syntax
function square() {
    return num1 * num2;
}

const squareArrow = () => {
    return num1 * num2;
}

// 2. Implict return keyword
const squareArr = () => num1 * num2;

// 3. Arguments
function fn() {
    console.log(arguments);
}
// fn(1,2,3);

const fnArr = () => {
    console.log(arguments);
}
// fnArr(1,2,3);

// 4. This keyword
const obj = {
    name: "Soham",
    regularFn: function() {
        console.log(this.name);   // Soham
    },
    arrowFn: () => {
        console.log(this.name);   // undefined
    }
}

obj.regularFn();
obj.arrowFn();

