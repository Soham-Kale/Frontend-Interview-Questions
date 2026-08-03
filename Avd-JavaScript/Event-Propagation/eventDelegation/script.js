// event propagation
document.querySelector(".product").addEventListener("click", (event) => {
    console.log(event);

    if(event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
});
