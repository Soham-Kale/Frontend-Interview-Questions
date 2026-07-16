// curring in javascript
// example: f(a,b) into f(a)(b)

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(sum(5)(6)(4));


function evaluate(operation) {
    return function(a) {
        return function(b) {
            if(operation === "sum") return a + b;
            else if(operation === "substract") return a - b;
            else if(operation === "divide") return a / b;
            else if(operation === "multiply") return a * b;
            else return "Invalid Operation";
        }
    }
}

console.log(evaluate("sum")(10)(2));