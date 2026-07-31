// Debouncing and Throttling in javascript

//  Que.1 - Create debounce polyfill implementations

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".pressed-count");
const count = document.querySelector(".triggered-count");

var pressedCount = 0;
var triggreCount = 0;

const myDebounce = (cb, t) => {
    let timer;
};

const debounceCount = myDebounce(() => {
    count.innerHTML = ++triggreCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
});