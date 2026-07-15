// closure in js
// lexical scoping

const userName = "Soham Kale";

// global scope
function local() {
    // local scope
    console.log(userName);
}

local(); // Soham Kale
