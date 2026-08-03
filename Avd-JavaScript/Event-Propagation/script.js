
const div = document.querySelector(".render");
const form = document.querySelector("form");
const button = document.querySelector("button");


// Que.4: What is event Capturing / Trickling?

div.addEventListener(
    "click", 
    function(e) {
        alert("div");
    }
);

button.addEventListener(
    "click", 
    function(e) {
        alert("button");
    }
);

form.addEventListener(
    "click", 
    function(e) {
        e.stopPropagation();
        alert("form");
    }
);

// Que.3: event.target vs this.target vs event.currentTarget
function func(event) {
    alert(
        "Current Target: " + 
        event.currentTarget.tagName +
        ", target = " +
        event.target.tagName +
        ", this = " +
        this.tagName
    );
}
