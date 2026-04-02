import React, { useState } from "react";

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <div>
            <h1>useState Hook</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <br />

            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(userData);
                }}
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="firstName"
                    onChange={handleInputChange}
                />
                <input type="text" 
                    placeholder="Enter your name" 
                    onChange={handleInputChange}
                    name="lastName" 
                />
                <input type="email" 
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    name="email" 
                />

                <br />
                <button>Submit Data</button>
            </form>
        </div>
    );
};

export default UseStateHook;
