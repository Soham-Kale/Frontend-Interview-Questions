// this keyword value is comes from its parent function.

// this.a = 5;
// const getParams = () => {
//     console.log(this.a);
// }

// getParams();


let user = {
    name: "John",
    age: 22,
    getUser: () => {
        console.log(this);
    }
}

user.getUser();


const user1 = {
    firstName: "Soham Kale!",
    getName() {
        const firstName = "Soham";
        return this.firstName;
    },
};

console.log(user1.getName()); // what is output


function makeUser() {
    return {
        name: "Billionaire",
        // ref: this
        ref () {
            return this
        }
    }
}

let userData = makeUser();

console.log(userData.ref().name);       // it calling window object
// console.log(userData.ref.name);       // it calling window object



var length = 4;

function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(fn) {
        fn();
    },
};

object.method(callback);