import './App.css';
import {Header} from "./Header";

function App() {

  return (
    <div className="App">
        <Header/>
      <div className={"simpleSegment"}>
          <h1> What is Readwise </h1>
          <p> Readwise is a start-up focused on creating the ultimate
          reading apps. Their main product, and the one I have been working
          on, is the Readwise Reader - a tool that provides features typically
          restricted to PDFs to everything from eBooks to emails and twitter threads.</p>
      </div>
    </div>
  );
}

export default App;
