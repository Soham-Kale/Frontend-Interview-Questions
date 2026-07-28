// Promises

console.log("Start");

const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if(result) resolve("Subscribe to Roadeside Coder");
        else reject(new Error("Why aren't you Subscribe to Roadeside Coder"));
    }, 1000);
});

sub.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

console.log("Stop");