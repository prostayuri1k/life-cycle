import React from "react";
class LifecycleClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.increment = this.increment.bind(this)
    }

    componentDidMount() {
        async  function login() {
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
    }

    componentDidUpdate() {
        console.log(`Class Component Counter: ${this.state.count}`)
    }

    shouldComponentUpdate() {
        return this.state.count % 2 !== 0;
    }

    componentWillUnmount() {
        console.log('classComponent will Unmount')
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <p>Счетчик: {this.state.count}</p>
                <button onClick={this.increment}>Увеличить</button>
            </div>
        )
    }
}

export default LifecycleClassComponent;