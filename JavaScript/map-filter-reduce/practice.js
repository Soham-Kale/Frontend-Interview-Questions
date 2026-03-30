let students = [
    {name: "Soham", age: 21, role: "developer"},
    {name: "Harsh", age: 23, role: "developer"},
    {name: "Tushar", age: 26, role: "Tester"},
]

// let allNames = students.map((students, i, arr) => {
//     return students.name.toUpperCase();
// })

let details = students.filter((students) => {
    return students.age > 25;
})

let sum = students.reduce((acc, curr) => {
    return acc+curr.age;
}, 0);

console.log(sum);