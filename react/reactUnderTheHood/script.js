// 1. Render Phase
// 2. Commit Phase

import React from "react";

function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count+1);
    }

    // return React.createElement(
    //     "div", 
    //     null, 
    //     React.createElement("p", null, `Count: ${count}`),
    //     React.createElement("button", {onClick: increment}, `Increment`),
    // );

    console.log("Count Rerender");

    return <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
}

function counterParent() {
    const [showMessage, setShowMessage] = React.useState(false);
    console.log("Parant Rerender");

    return(
        <div>
            <Counter/>
            <br/>
            {showMessage && <p>Now you see me</p>}
            <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>
            <br/>
            <FrameWorks/>
        </div>
    )
}

const FrameWorks = () => {
    const [frameWorks, setFreamworks] = React.useState(["React, Angular"]);
    return(
        <div>
            <h1>Popular Frameworks</h1>
            <div>
                { frameWorks.map((item, index) => {
                    <h3 key={index}>{item}</h3>
                })}
                <button onClick={() => setFreamworks([...frameWorks, "vue"])}>
                    Add New
                </button>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(counterParent));