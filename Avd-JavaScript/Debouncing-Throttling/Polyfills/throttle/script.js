// Debouncing and Throttling in javascript

//  Que.1 - Create debounce polyfill implementations

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".pressed-count");
const count = document.querySelector(".triggered-count");

var pressedCount = 0;
var triggreCount = 0;

const myThrottle = (cb, d) => {
    let last = 0;

    return function(...args) {
        let now = new Date().getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    };
};

const debounceCount = myThrottle(() => {
    count.innerHTML = ++triggreCount;
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
});