console.log(a);    // undefine
var a = 10;

console.log(b);    // hoisted in temporal dead zone
let b = 10;



function abc() {
    console.log(a, b, c);

    const a = 30; // temporal dead zone
    let b = 20;   // temporal dead zone
    var c = 10;   // undefine
}

abc();