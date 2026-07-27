// Polyfill for call Method

let car = {
    name: "Rolls Royce",
    color: "White"
}

function printCarDetails(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.name} for ${currency}${price}.`
    )
}

// polyfills for call
Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not collable");
    }

    context.fn = this;
    context.fn(...args);
}

// polyfills for apply
Function.prototype.myApply = function(context = {}, args=[]) {
    if(typeof this !== "function") {
        throw new Error(this + "It's not collable");
    }

    if(!Array.isArray(args)) {
        throw new TypeError("CreateListFormArrayLike called on non objects");
    }

    context.fn = this;
    context.fn(...args);
}

// printCarDetails.myCall(car, ["$", "400000"]);
printCarDetails.myApply(car, ["$", "400000"]);