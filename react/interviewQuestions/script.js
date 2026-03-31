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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Counter));


// ### **15 Most Asked Interview Questions**

// #### **Ques 1: What is React and why is it used?**

// * React is a popular JavaScript library for building user interfaces (UIs) for web applications.
// * It is known for its efficiency, flexibility, and reusability in creating interactive UI components.
// * React allows developers to build complex UIs by breaking them down into smaller, reusable components.
// * These components can manage their own state, making it easier to build and maintain large-scale applications.

// ---

// #### **Ques 2: What is JSX, and why is it used?**

// * JSX → JavaScript XML
// * Allows you to write HTML-like code within JavaScript
// * Used in React to define the structure of components

// ---

// #### **Ques 3: What is a React component?**

// * Reusable building block for the UI
// * Can be a class or function that returns JSX

// ---

// #### **Ques 4: What is the difference between state and props?**

// * **Mutability:**
//   State is mutable and managed within the component
//   Props are immutable and passed from parent to child

// * **Ownership:**
//   State is owned by the component
//   Props are owned by the parent component

// * **Usage:**
//   State → internal data that changes over time
//   Props → pass data between components

// ---

// #### **Ques 5: What is prop drilling?**

// * Process of passing props through multiple nested components

// ---

// #### **Ques 13: What is Virtual DOM?**

// * Logical representation of the real DOM in the form of React elements
// * Virtual UI is kept in memory
// * Object that represents the UI using React elements

// ---

// #### **Ques 14: Reconciliation vs Rendering**

// * **Reconciliation:**
//   Process of comparing two Virtual DOMs

// * **Rendering:**
//   Updating the actual DOM

// ---

// #### **Ques 15: What is Diff Algorithm?**

// * When state/props update → new Virtual DOM is created
// * Diff algorithm compares old vs new VDOM
// * Only the changed parts are updated in the real DOM
// * Helps in fast DOM manipulation

// ---
