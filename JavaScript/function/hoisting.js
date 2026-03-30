// name();
// console.log(a);

// function name() {
//     console.log("Soham will working as a Software Engineer at Mysten Labs or Caldera soon");
// }

// var a = 10;


var b = 21;
function scope() {
    console.log(b);   // undefined
    var b = 12;
}

scope();    // undefined