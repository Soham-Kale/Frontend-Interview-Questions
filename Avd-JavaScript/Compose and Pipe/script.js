
const addFive = (num) => {
    return num + 5;
};

const multiplyTwo = (num) => {
    return num * 2;
};

const substractThree = (num) => {
    return num - 3;
};

const evaluate = compose(addFive, multiplyTwo, substractThree);
console.log(evaluate(10));   // 27

// step - 1
function compose(...fns) {
    return function(init) {
        // let result = init;
        // for(let i = fns.length - 1; i >= 0; i--) {
        //     result = fns[i](result);
        // }
        // return result;

        return fns.reduceRight((acc, curr) => {
            return curr(acc);
        }, init);
    }
};


// implementation of Pipe
const evaluatePipe = pipe(addFive, multiplyTwo, substractThree);
console.log(evaluatePipe(10));   // 27

// step - 1
function pipe(...fns) {
    return function(init) {
        // let result = init;
        // for(let i = fns.length - 1; i >= 0; i--) {
        //     result = fns[i](result);
        // }
        // return result;

        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, init);
    }
};