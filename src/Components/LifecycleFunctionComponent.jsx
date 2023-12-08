import React, {useEffect, useState} from "react";

const Count = ({count}) => <p>Счетчик: {count}</p>
const ExportCount = React.memo(Count, (prevProps, nextProps) => {
    console.log(prevProps,nextProps);

    return nextProps.count % 2 !== 0;
})
const LifecycleFunctionComponent = () => {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

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
            <ExportCount count={count}/>
            <button onClick={increment}>Увеличить</button>
        </div>
    )
}

export default LifecycleFunctionComponent;