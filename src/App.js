import './App.css';
import LifecycleClassComponent from "./Components/LifecycleClassComponent";
import LifecycleFunctionComponent from "./Components/LifecycleFunctionComponent";
import React from "react";



function App() {
    return (
        <div className="App">
            <LifecycleClassComponent/>
            <LifecycleFunctionComponent/>
        </div>
    );
}

export default App;
