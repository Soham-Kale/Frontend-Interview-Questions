// L1

function introduce() {
    console.log("Hi, I'm", this.name);
};

const student = {
    name: "Soham",
    age: 22,
    introduce
};

student.introduce();

// or

const student = {
    name: "Soham",
    age: 22,

    introduce() {
        console.log("Hi, I'm", this.name);
    }
};

student.introduce();


const user = {
    name: "Soham"
};

function greet() {
    console.log(this.name);
};

greet.call(user); // soham
