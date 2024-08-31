import './App.css';
import {Header} from "./Header";
import {About} from "./About";
import {MyRole} from "./MyRole";
import {Culture} from "./Culture";
import {Goals} from "./Goals";

function App() {

  return (
    <div className="App">
        <Header/>
        <About/>
        <MyRole/>
        <Culture/>
        <Goals/>
    </div>
  );
}

export default App;
