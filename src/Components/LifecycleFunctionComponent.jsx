import React, {useEffect, useState} from "react";

const LifecycleFunctionComponent = () => {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)

    useEffect(() => {
        async function login() {
            let options = {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: "yury.hrymats@icloud.com",
                    password: "Yuruhrymats_1998"
                })
            }
            let response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', options);
            let result = await response.json();
            console.log(result);
        }

        login();
    }, []);

    useEffect(() => {
        return () => console.log('functionComponent will Unmount');
    }, [])

    useEffect(() => {
        console.log(`Function Component Counter: ${count}`);
    }, [count]);


    return (
        <div>
            <h2>Function Component</h2>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
        </div>
    )
}

export default LifecycleFunctionComponent;