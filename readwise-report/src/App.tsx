import './App.css';
import {Header} from "./Header";
import {ImageFlexRow} from "./ImageFlexRow";
import {GoalsSection} from "./GoalsSection";

function App() {

  return (
    <div className="App">
        <Header/>
      <div className="simpleSegment">
          <h1> What is Readwise </h1>
          <p> Readwise is a start-up focused on creating the ultimate
          reading apps. Their main product, and the one I have been working
          on, is the Readwise Reader - a tool that provides features typically
          restricted to PDFs to everything from eBooks to emails and twitter threads.</p>
      </div>
      <ImageFlexRow/>
      <div className="simpleSegment">
        <h1> My role</h1>
          <p>
            As Readwise is a start-up, full-time developers are often flooded
            with important, long-term projects. This allows many bugs and smaller features,
            such as animations and log-out screens, to be ignored for too long.<br/>
            That's where an intern like me comes in!<br/><br/>
            A summary of my contributions can be found below.
          </p>
      </div>
        <ImageFlexRow/>
        <GoalsSection/>
    </div>
  );
}

export default App;
