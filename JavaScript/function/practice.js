
//  o/p based questions
for(let i=0; i<5; i++) {   // let are block scope variable
    setTimeout(() => {
        console.log(i);
    }, 1000)
}   
// 0 1 2 3 4

for(var i=0; i<5; i++) {   // var are global scope variable
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
// 5 5 5 5 5


const fn = (a, x, y, ...num) => {   // params or parameter
    console.log(x, y, num);
}

fn(1, 2, 3, 4, 5, 6, 7);    /// arguments