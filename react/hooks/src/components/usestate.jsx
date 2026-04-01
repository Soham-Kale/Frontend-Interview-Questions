import React, { useState } from 'react'

const UseStateHook = () => {
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1>useState Hook</h1>
            
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseStateHook;