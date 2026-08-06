// Level 1

const numbers = [1,2,3,4,5];

const newNumber = numbers.map(
    number => number * 2 
);

const evenNumber = numbers.filter(
    number => number % 2 === 0
);

const sumNumber = numbers.reduce((acc, num) => acc + num);

console.log(newNumber);
console.log(evenNumber);
console.log(sumNumber);

// Level 2

