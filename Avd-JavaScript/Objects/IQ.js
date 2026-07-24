// output based

const obj = {
    a: "one",
    b: "two",
    a: "three"
}

console.log(obj);    // { a: 'three', b: 'two' }

// Example 2
const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);


// Example - 3
// what's JSON.stringify() and JSON.parse()?
const user = {
    name: "Elon",
    age: 22
}

const strObj = JSON.stringify(user);  // It converts into string

// localStorage.setItem("test", strObj);
// console.log(localStorage.getItem("test", strObj));

console.log(JSON.parse(strObj));    


// Example - 4
console.log([..."Priyansh"]);  // it can sprade all character in array.


// Example - 5
const user1 = { name: "Rohit", age: 39 };
const admin = { admin: true, ...user1 };

console.log(admin);   // 




// What is the shallow copy and deep copy of object

// Shallow copy: One object is reference to another object is called shallow copy.
// Deep copy: When we clone one object into another valude is called deep copy.
// we don't have reference to original objects that why it called deep copy.

const userObj = {
    name: "Hanumant Mama",
    age: 51
}

const objClone = JSON.parse(JSON.stringify(userObj));
console.log(userObj, objClone);