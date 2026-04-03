import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectHook = () => {
    const [userData, setUserData] = useState([]);

    const featchData = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserData(data);
        // console.log("response data: ", data);
    }

    useEffect(() => {

    }, []);

    useLayoutEffect(() => {
        
    }, [])

    return (
        <div>
            <button onClick={featchData}>Featch Data</button>

            {
                userData.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h3>{user.website}</h3>
                    </div>
                ))
            }

            <h5>
                Question 6: Explain useLayoutEffect and how it is different from useEffect?
            </h5>

            {/* useEffect:
            - Asynchronous: Runs after the render cycle is committed to the screen.
            - Good for Performance: Does not block the browser from painting changes on the screen.

            useLayoutEffect:
            - Synchronous: Runs synchronously immediately after the DOM is updated but before the browser paints anything on the screen.
            - Potentially Blocking: Can potentially cause delays in the rendering process if the operations are heavy. 
            */}
        </div>
    )
}

export default UseEffectHook;