// Objects from javascript

const person = {
    name: "Soham",
    age: 22
}

person.name = "Billionaire";
console.log(person.name); // Billionaire

// Example - 2
const name = "Veer Ganesh";
const property = "firstName";

const person1 = {
    [property]: name
}

console.log(person1);


// Example - 3

const user = {
    name: "Soham",
    age: 22,
    designation: "Software Engineer"
}

// accessing only key from object
for(key in user) {
    console.log(key);
}

// accessing only values from object
for(key in user) {
    console.log(user[key]);
}