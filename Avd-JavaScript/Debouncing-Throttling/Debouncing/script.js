// Debouncing and Throttling in javascript

//  Que.1 - Create button ui and add debounce as follows =>
//          => show "Button Pressed <X> Times" every time when button is pressed
//          => Increase "Triggered <Y> Times" count after 800ms debounce


const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".pressed-count");
const count = document.querySelector(".triggered-count");

var pressedCount = 0;
var triggreCount = 0;

const debouncedCount = _.debounce(() => {
    count.innerHTML = ++triggreCount;
}, 800);

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    debouncedCount();
});