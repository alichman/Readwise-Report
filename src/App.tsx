import './App.css';
import {Header} from "./Header";
import {About} from "./About";
import {MyRole} from "./MyRole";
import {Culture} from "./Culture";
import {Goals} from "./Goals";
import {useState} from "react";
import {WTToggle} from "./WTToggle";

function App() {
    const [wt, setWt] = useState<number>(2)

    return (
        <div className="App">
            <Header/>
            <About/>
            <WTToggle wt={wt} setWt={setWt}/>
            <MyRole sem={wt}/>
            <Culture/>
            <Goals wt={wt}/>
        </div>
    );
}

export default App;
