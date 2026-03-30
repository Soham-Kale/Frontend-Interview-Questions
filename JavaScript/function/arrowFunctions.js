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
fnArr(1,2,3);

