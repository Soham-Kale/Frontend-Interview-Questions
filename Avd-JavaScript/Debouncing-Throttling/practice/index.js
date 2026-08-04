// -------------------- Task 1 --------------------------
// Create a debounce function.
// Use it with an input box.
// Print the text only after the user stops typing for 1 second.

const input = document.querySelector(".input-box");
const title = document.querySelector(".output");

const debounceTitle = _.debounce(() => {
    // title.innerHTML = input.value;
    input.value = "Searching....";
}, 1000);

input.addEventListener("input", () => {
    debounceTitle();
}); 



// -------------------- Task 2 --------------------------
// Create a debounce function.
// Use it with an input box.
// Print the text only after the user stops typing for 500ms.

let timer;

input.addEventListener("input", () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        input.value = "Searching....";
    }, 500); // Wait 500ms after user stops typing
});



// -------------------- Task 3 --------------------------