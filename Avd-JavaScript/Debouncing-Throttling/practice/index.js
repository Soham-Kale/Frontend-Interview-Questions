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
