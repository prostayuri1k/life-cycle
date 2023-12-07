import './App.css';
import LifecycleClassComponent from "./Components/LifecycleClassComponent";
import LifecycleFunctionComponent from "./Components/LifecycleFunctionComponent";



function App() {
    return (
        <div className="App">
            <LifecycleClassComponent/>
            <LifecycleFunctionComponent/>
        </div>
    );
}

export default App;
