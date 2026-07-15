// Time Optimization using closure

function find(index) {
    let a = [];
    for(let i=0; i<1000000; i++) {
        a[i] = i * i;
    }
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(50);
console.timeEnd("12");


// with closure optimization
console.log("After Closure implementation !!!!!!!!!")
function find() {
    let a = [];
    for(let i=0; i<1000000; i++) {
        a[i] = i * i;
    }
    return function(index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");

console.time("50");
closure(50);
console.timeEnd("50");



//     Que. 2 Block Scope and setTimeout
function a() {
    for(var i=0; i<3; i++) {
        setTimeout(function log() {
            console.log(i);      // what is logged ? 
        },i * 1000);
    }
}

// 0 1 2   Ans: 3 3 3 
a();

console.log("After Closure implementation !!!!!!!!!")

function usingClosure() {
    for(var i=0; i<3; i++) {
        function inner(i) {
            setTimeout(function log() {
                console.log(i);      // what is logged ? 
            },i * 1000);
        }
        inner(i);    
    }
}

usingClosure();
