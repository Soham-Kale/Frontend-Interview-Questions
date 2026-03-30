//  Function Scope

var num1 = 2;
num2 = 30;
name = "Soham Kale";

function multiply() {
    return num1*num2;
}

console.log(multiply());  // 60

function getScore() {
    var num1 = 2;
    num2 = 5;

    function add() {
        return name + " Scored: " + (num1 + num2);
    }

    return add();
}

console.log(getScore());   // Soham Kale Scored: 7